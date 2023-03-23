const express = require("express");

const jobController = require("../controllers/job.controller");

const router = express.Router();

router.post("/add", (req, res) => {
  jobController.add(req, res);
});

router.delete("/remove/:id", (req, res) => {
  jobController.remove(req, res);
});

module.exports = router;
