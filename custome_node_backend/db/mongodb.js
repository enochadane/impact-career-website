const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DB_CONNECTION_STRING;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      retryWrites: true,
      w: "majority",
    });
    console.log("database connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
