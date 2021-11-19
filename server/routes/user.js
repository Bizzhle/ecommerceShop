const express = require("express");
const authController = require("../controllers/authController");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../util/verifyToken");

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.put("/:id/update", verifyTokenAndAuthorization, authController.update);

router.delete(
  "/:id/delete",
  verifyTokenAndAuthorization,
  authController.delete
);

router.get("/find/:id", verifyTokenAndAdmin, authController.user_detail);

router.get("/", verifyTokenAndAdmin, authController.user_list);

router.get("/stats", verifyTokenAndAdmin, authController.user_stats);

module.exports = router;
