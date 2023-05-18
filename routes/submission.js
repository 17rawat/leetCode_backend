const express = require("express");

const {
  postSubmission,
  getAllSubmissions,
  getSubmission,
} = require("../controllers/submission");
const router = express.Router();

router.post("/", postSubmission);
router.get("/", getAllSubmissions);
router.get("/:id", getSubmission);

module.exports = router;
