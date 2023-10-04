const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("tasks");
  })
  .post((req, res) => {});

router
  .route("/:id")
  .get((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
