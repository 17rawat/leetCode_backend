const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const User = require("../models/user");

require("dotenv").config();

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create a new user
    const user = await User.create({ username, email, password });

    // Return the new user object
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

const logIn = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ error: "Invalid email or password" });
    // }

    // Generate a JWT token and return it to the client
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_SECRET, // replace with your own secret key
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
module.exports = { signUp, logIn };