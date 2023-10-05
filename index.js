const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const notFound = require("./middleware/404");
require("dotenv").config();
const connectDB = require("./db/connect");

// middleware
app.use(express.static("./public"));
app.use(express.json());
// routes

app.use("/api/v1/tasks", require("./routes/tasks"));

app.use(notFound);
app.use(require("./middleware/errorHandler"));

const start = async () => {
  try {
    await connectDB();
    console.log("Connect to the DB");
    app.listen(port, () => {
      console.log(`server is now listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
