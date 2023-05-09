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
      return res.status(409).json({ error: "User already exists" });
    }

    // encrypting the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating a new user with the hashed password
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Returning the new user object
    return res.status(201).json({ user });
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
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate a JWT token and return it to the client
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_SECRET, // replace with your own secret key
      { expiresIn: "1h" }
    );

    // res.status(201).json({ user });

    // res.redirect(`/home?username=${user.username}&token=${token}`);

    res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = { signUp, signIn };
