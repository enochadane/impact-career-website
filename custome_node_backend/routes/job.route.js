const express = require("express");

const jobController = require("../controllers/job.controller");

const router = express.Router();

router.post("/add", (req, res) => {
  jobController.add(req, res);
});

router.delete("/remove/:id", (req, res) => {
  jobController.remove(req, res);
});

router.get("/get-all", (req, res) => {
  jobController.getAllJobs(req, res);
});

router.get("/get-jobs-by-page/:page", (req, res) => {
  jobController.getJobsByPage(req, res);
});

router.get("/get-filtered-jobs/:search", (req, res) => {
  jobController.getFilteredJobs(req, res);
});

router.get("/total-jobs", (req, res) => {
  jobController.getTotalJobs(req, res);
});

module.exports = router;
