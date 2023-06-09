const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const User = require("../models/user");

require("dotenv").config();

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with given email already exists" });
    }

    // encrypting the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating a new user with the hashed password
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // console.log(user);

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET // replace with your own secret key
    );

    // Returning the new user object
    return res.status(201).json({ token, username, email });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or username" });
    }
    // console.log(user);

    // Comparing the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // console.log(isMatch);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token and return it to the client
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET // replace with your own secret key
    );

    res.status(201).json({ token, username, email });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { signUp, signIn };
