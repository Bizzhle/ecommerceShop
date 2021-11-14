const express = require("express");
const orderController = require("../controllers/orderController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../util/verifyToken");

const router = express.Router();

router.post("/create", verifyToken, orderController.cart_create);

router.put(
  "/:id/update",
  verifyTokenAndAuthorization,
  cartController.cart_update
);

router.delete(
  "/:id/delete",
  verifyTokenAndAuthorization,

  cartController.cart_delete
);

router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  cartController.cart_detail
);

router.get("/", verifyTokenAndAdmin, orderController.cart_list);
