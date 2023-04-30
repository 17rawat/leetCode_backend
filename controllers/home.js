const jwt = require("jsonwebtoken");

const home = (req, res) => {
  const { username, token } = req.query;

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded.userId);

    // Display a welcome message to the user
    res.send(`Welcome, ${username}! Your user ID is ${decoded.userId}.`);
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = home;
