const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
const connectDB = require("./db/connect");

// middleware
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello</h1>");
});
app.use("/api/v1/tasks", require("./routes/tasks"));

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
