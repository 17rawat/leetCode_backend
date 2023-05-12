const mongoose = require("mongoose");

// Define the submission schema
const submissionSchema = new mongoose.Schema(
  {
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
