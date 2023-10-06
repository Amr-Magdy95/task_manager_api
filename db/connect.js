const mongoose = require("mongoose");
require("dotenv").config();

module.exports = connectDB = () => {
  let connectionString = process.env.DATABASE_URL || process.env.MONGO_URI;
  return mongoose.connect(connectionString);
};
