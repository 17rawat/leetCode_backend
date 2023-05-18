const Submission = require("../models/submission");

require("../middleware");

const postSubmission = async (req, res) => {
  const Accepted = Math.random() < 0.5;
  const problemId = req.body.problemId;
  const title = req.body.problemTitle;
  const code = req.body.code;
  const language = req.body.language;

  // Create a new Submission document based on the submission details
  const newSubmission = new Submission({
    problemId,
    title,
    language,
    code,
    userId: req.userId,
    status: Accepted ? "Accepted" : "Wrong Answer",
  });

  try {
    // Save the new submission to the database
    await newSubmission.save();
    return res.status(201).json({
      status: Accepted ? "Accepted" : "Wrong Answer",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error",
    });
  }
};

const getAllSubmissions = async (req, res) => {
  try {
    const userId = req.userId;

    const submissions = await Submission.find({
      // problemId: problemId,
      userId: userId,
    });

    res.status(201).json({
      submissions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const getSubmission = async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    // console.log(id);

    // const userId = req.userId;
    const submission = await Submission.findOne({ _id: id });

    if (!submission) {
      return res
        .status(404)
        .json({ msg: `No submission available with id:  ${id}` }); // when some characters is replace by others
    }

    res.status(201).json({ status: true, submission });
  } catch (error) {
    res.status(500).json({ msg: error }); // when some of the characters is missing (actual length) is not present
  }
};

module.exports = { postSubmission, getAllSubmissions, getSubmission };
