const express = require("express");
const orderController = require("../controllers/orderController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../util/verifyToken");

const router = express.Router();

router.post("/create", verifyToken, orderController.order_create);

router.put("/:id/update", verifyToken, orderController.order_update);

router.delete("/:id/delete", verifyTokenAndAdmin, orderController.order_delete);

router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  orderController.order_detail
);

router.get("/", orderController.order_list);

router.get("/income", verifyTokenAndAdmin, orderController.order_income);
