const router = require("express").Router();
const { getAllTasks } = require("../controllers/tasks.js");

router
  .route("/")
  .get(getAllTasks)
  .post((req, res) => {});

router
  .route("/:id")
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
