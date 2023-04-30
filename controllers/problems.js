const Problem = require("../models/problems");

const getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find({});
    res.status(200).json({ status: true, problems });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getproblem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findOne({ _id: id });

    if (!problem) {
      return res
        .status(404)
        .json({ msg: `No problem available with id:  ${id}` }); // when some characters is replace by others
    }

    res.status(200).json({ status: true, problem });
  } catch (error) {
    res.status(500).json({ msg: error }); // when some of the characters is missing (actual length) is not present
  }
};

const setproblem = async (req, res) => {
  const checkForDuplicate = await Problem.findOne({ title: req.body.title });
  if (checkForDuplicate) {
    return res.status(409).json({ msg: "Problem already exist" });
  }

  const problem = new Problem({
    title: req.body.title,
    acceptanceRate: req.body.acceptanceRate,
    difficulty: req.body.difficulty,
    problemStatement: req.body.problemStatement,
    input: req.body.input,
    output: req.body.output,
    explanation: req.body.explanation,
  });

  try {
    const newProblem = await problem.save();
    res.status(201).json({ status: "Created Successfully", newProblem });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (problem == null) {
      return res.status(404).json({ message: "Problem not found" });
    }

    if (req.body.title != null) {
      problem.title = req.body.title;
    }
    if (req.body.acceptanceRate != null) {
      problem.acceptanceRate = req.body.acceptanceRate;
    }
    if (req.body.difficulty != null) {
      problem.difficulty = req.body.difficulty;
    }
    if (req.body.problemStatement != null) {
      problem.problemStatement = req.body.problemStatement;
    }
    if (req.body.input != null) {
      problem.input = req.body.input;
    }
    if (req.body.output != null) {
      problem.output = req.body.output;
    }
    if (req.body.explanation != null) {
      problem.explanation = req.body.explanation;
    }

    const updatedProblem = await problem.save();
    res.status(200).json({ status: "Updated Successfully", updatedProblem });
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProblem = await Problem.findOneAndDelete({ _id: id });

    if (!deleteProblem) {
      return res
        .status(404)
        .json({ msg: `No problem available with id:  ${id}` });
    }

    res.status(200).json({ status: "Deleted Successfully", deletedProblem });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllProblems,
  setproblem,
  getproblem,
  updateProblem,
  deleteProblem,
};
