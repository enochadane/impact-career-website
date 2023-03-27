const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    companyName: {
      type: String,
    },
    salary: {
      type: String,
    },
    location: {
      type: String,
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    },
    urlSlug: {
      type: String,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
