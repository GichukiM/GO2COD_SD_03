const bcrypt = require("bcryptjs");
const User = require("../models/User");
const passport = require("passport");

exports.signupWithEmail = async (req, res) => {
  const { name, email, password, termsChecked } = req.body;

  // Check if email already exists
  let existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered." });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = new User({
    name,
    email,
    password: hashedPassword,
    termsChecked,
    emailChecked: false,
  });

  await user.save();
  res.status(201).json({ message: "User created successfully." });
};

exports.oauthSignup = (req, res, next) => {
  passport.authenticate(req.params.provider, {
    successRedirect: "/welcome-home", // Redirect after successful login
    failureRedirect: "/login", // Redirect if authentication fails
    failureFlash: true,
  })(req, res, next);
};
