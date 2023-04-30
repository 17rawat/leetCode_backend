const home = (req, res) => {
  res.send("<h1>Welcome to Leetcode</h1>");
};

// const User = require("../models/user");
// require("dotenv").config();

// const home = async (req, res) => {
//   // Get the token from the request header
//   const token = req.headers.Authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   console.log(token);

//   try {
//     // Verify the token and get the user data
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const userId = decoded.userId;

//     // Check if the user exists in the database
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Return the home page data
//     return res.status(200).json({ message: `Welcome, ${user.username}!` });
//   } catch (error) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
// };

module.exports = home;
