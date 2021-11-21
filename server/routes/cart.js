const express = require("express");
const cartController = require("../controllers/cartController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../util/verifyToken");

const router = express.Router();

router.post("/create", verifyToken, cartController.cart_create);

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

router.get("/", verifyTokenAndAdmin, cartController.cart_list);

module.exports = router;
