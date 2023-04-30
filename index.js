const express = require("express");
const app = express();
const user = require("./routes/user");
const home = require("./routes/home");
const problems = require("./routes/problems");
const port = 3001;
const connectDB = require("./config/connect");
require("dotenv").config();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/home", home);
app.use("/problems", problems);

app.use("/users", user);

// app.get("/questions", function (req, res) {
//   try {
//     const limit = req.query.limit
//       ? parseInt(req.query.limit)
//       : questions.length;
//     // Limit the number of questions returned based on the limit parameter
//     const limitedQuestions = questions.slice(0, limit);
//     res.status(200).json(limitedQuestions);
//   } catch (error) {
//     // Return an error response if there is an issue retrieving the questions
//     console.error(error);
//     res.status(400).json({ error: "Unable to retrieve questions" });
//   }
// });

// app.get("/submissions", function (req, res) {
//   try {
//     res.status(200).json(submissions);
//   } catch (error) {
//     res.status(400).json({ error: "Unable to retrieve submissions" });
//   }
// });

// app.get("/submissions/:problemId", (req, res) => {
//   const problemId = parseInt(req.params.problemId);

//   // Check if problemId is a valid integer
//   if (isNaN(problemId) || problemId < 1) {
//     return res.status(400).json({ error: "Invalid problemId" });
//   }

//   const submission = submissions.find((s) => s.id === problemId);

//   // Check if submission exists
//   if (!submission) {
//     return res.status(404).json({ error: "Submission not found" });
//   }

//   return res.status(200).json(submission);
// });

// app.post("/submissions", function (req, res) {
//   // let the user submit a problem, randomly accept or reject the solution
//   // Store the submission in the SUBMISSION array above
//   const submission = req.body.submission;
//   const isAccepted = Math.random() < 0.5;
//   if (isAccepted) {
//     SUBMISSION.push({ ...submission });
//     res.status(201).send("Submission Accepted");
//   } else {
//     res.status(400).send("Submission Rejected");
//   }
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL); // first connecting with database then start the application
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
