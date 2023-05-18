const mongoose = require("mongoose");

// Define the submission schema
const submissionSchema = new mongoose.Schema(
  {
    title: String,
    language: String,
    code: String,
    problemId: String,
    userId: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("submission", submissionSchema);
