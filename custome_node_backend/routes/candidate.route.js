const express = require("express");

const candidateController = require("../controllers/candidate.controller");

const router = express.Router();

router.post("/add-profile", (req, res) => {
  candidateController.addProfile(req, res);
});

module.exports = router;
