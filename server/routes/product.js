const express = require("express");
const productController = require("../controllers/productController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../util/verifyToken");

const router = express.Router();

router.post("/create", verifyTokenAndAdmin, productController.product_create);

router.put(
  "/:id/update",
  verifyTokenAndAdmin,
  productController.product_update
);

router.delete(
  "/:id/delete",
  verifyTokenAndAdmin,
  productController.product_delete
);

router.get("find/:id", productController.product_detail);

router.get("/", productController.product_list);
