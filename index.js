const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const connectDB = require("./db/connect");
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.send("<h1>Task Manager API</h1> <a href='./api/v1/tasks'>All Tasks</a>");
});

app.use("/api/v1/tasks", require("./routes/tasks"));

app.use(require("./middleware/404"));
app.use(require("./middleware/errorHandler"));

const start = async () => {
  try {
    await connectDB();
    console.log("Connected to the DB");
    app.listen(port, () => {
      console.log(`server is now listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
