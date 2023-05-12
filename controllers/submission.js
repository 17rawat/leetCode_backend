const Submission = require("../models/submission");

require("../middleware");

const submission = async (req, res) => {
  const isCorrect = Math.random() < 0.5;
  const problemId = req.body.problemId;
  const code = req.body.code;

  // Create a new Submission document based on the submission details
  const newSubmission = new Submission({
    code,
    problemId,
    userId: req.userId,
    status: isCorrect ? "correct" : "incorrect",
  });

  try {
    // Save the new submission to the database
    await newSubmission.save();
    return res.status(201).json({
      status: isCorrect ? "correct" : "incorrect",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error",
    });
  }
};

module.exports = submission;
