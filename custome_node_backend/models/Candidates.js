const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    yearsOfExperience: {
      type: Number,
    },
    country: {
      type: String,
    },
    skills: {
      type: Array,
    },
    workHistory: [
      {
        company: String,
        description: String,
        endingMonth: String,
        endingYear: Number,
        position: String,
        startingMonth: String,
        startingYear: Number,
        stillWorkingHere: Boolean,
      },
    ],
    certifications: [
      {
        name: String,
        year: Number,
      },
    ],
    education: [
      {
        college: String,
        degree: String,
        educationLevel: String,
        endingMonth: String,
        endingYear: Number,
        startingMonth: String,
        startingYear: Number,
        stillEnrolledHere: Boolean,
      },
    ],
    idealJobDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

const Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports = Candidate;
