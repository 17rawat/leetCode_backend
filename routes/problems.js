const express = require("express");
const router = express.Router();

const {
  getAllProblems,
  getproblem,
  setproblem,
  updateProblem,
  deleteProblem,
} = require("../controllers/problems");

router.get("/", getAllProblems);
router.get("/:id", getproblem);
router.post("/", setproblem);
router.put("/:id", updateProblem);
router.delete("/:id", deleteProblem);

module.exports = router;
