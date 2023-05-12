const express = require("express");
const app = express();
const user = require("./routes/user");

const problems = require("./routes/problems");
const submission = require("./routes/submission");
const port = 3001;
const connectDB = require("./config/connect");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
const auth = require("./middleware");

app.use(bodyParser.json());

app.use("/problems", problems);
app.use("/submission", auth, submission);

app.use("/users", user);

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
