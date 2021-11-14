const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SEC,
    { expiresIn: "1h" }
  );
}

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ username }); // we're first checking if there is any user with the provided email address.
    if (user) {
      return res.status(400).send({
        status: "fail",
        message: "User with the provided username already exists.",
      });
    }

    const hashpassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      email,
      password: hashpassword,
    });
    // req.session.user = newUser;
    res.status(201).send({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).send("Something went wrong. Try again later.");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send({
        status: "fail",
        message:
          "Username or password incorrect, kindly enter correct username and password",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      return res.status(400).send({
        status: "fail",
        message: "Incorrect password, enter correct password",
      });
    }

    const token = generateToken(user);

    if (isCorrect) {
      res.status(200).send({
        user: user,
        token,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.update = async (req, res) => {
  const hashpassword = await bcrypt.hash(password, 12);
  if (req.body.password) {
    req.body.password = hashpassword;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER
exports.user_detail = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.user_list = async (req, res) => {
  const query = req.query.new;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.user_stats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
