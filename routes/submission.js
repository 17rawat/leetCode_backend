const express = require("express");
const submission = require("../controllers/submission");
const router = express.Router();
// const auth = require("./middleware");

router.post("/", submission);

module.exports = router;
