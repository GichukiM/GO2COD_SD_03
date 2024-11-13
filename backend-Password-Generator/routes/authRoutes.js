const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signupWithEmail);
router.get("/auth/google", authController.oauthSignup);
router.get("/auth/github", authController.oauthSignup);

module.exports = router;
