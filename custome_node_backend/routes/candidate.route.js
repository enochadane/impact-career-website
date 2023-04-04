const express = require("express");

const candidateController = require("../controllers/candidate.controller");

const router = express.Router();

router.post("/add-profile", (req, res) => {
  candidateController.addProfile(req, res);
});

router.post("/sign-up", (req, res) => {
  candidateController.signUp(req, res);
});

router.post("/sign-in", (req, res) => {
  candidateController.signIn(req, res);
});

router.patch("/update-work-history/:userId", (req, res) => {
  candidateController.updateWorkHistory(req, res);
});

router.patch("/update-certifications/:userId", (req, res) => {
  candidateController.updateCertifications(req, res);
});

router.patch("/update-education/:userId", (req, res) => {
  candidateController.updateEducation(req, res);
});

router.get("/unsubscribe/:userId", (req, res) => {
  candidateController.unsubscribe(req, res);
});

router.get("/resubscribe/:userId", (req, res) => {
  candidateController.resubscribe(req, res);
});

module.exports = router;
