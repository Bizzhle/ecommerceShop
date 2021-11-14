const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const {
  MONGO_USER,
  MONGO_PORT,
  MONGO_IP,
  MONGO_PASSWORD,
} = require("./config");

const usersRouter = require("./routes/user");
const productsRouter = require("./routes/product");
const ordersRouter = require("./routes/order");
const cartsRouter = require("./routes/cart");

const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/webshopper?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("succesfully connected to DB"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

const db = mongoose.connection;

db.once("open", function () {
  console.log("connection has been made");
});

app.get("/api/v1", (req, res) => {
  res.send("<h2>Hi There!!</h2>");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/orders", ordersRouter);
app.use("/api/v1/carts", cartsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));
