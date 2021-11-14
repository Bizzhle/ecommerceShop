const jwt = require("jsonwebtoken");

// const { SECRET_KEY } = require("../config");

// module.exports = (context) => {
//   const authheader = context.req.headers.authorization;

//   if (authheader) {
//     const token = authheader.split("Bearer ")[1];

//     if (token) {
//       try {
//         const user = jwt.verify(token, SECRET_KEY);
//         return user;
//       } catch (err) {
//         throw new AuthenticationError("Invalid/Expired token");
//       }
//     }
//     throw new Error("Authentication token must be 'Bearer [token]");
//   }
//   throw new Error("Authhorization header must be provided");
// };

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
