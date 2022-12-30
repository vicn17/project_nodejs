const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/my_database");
  } catch (error) {
    console.log("error connect!!!");
  }
}

module.exports = { connect };
