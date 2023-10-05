const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { CustomAPIError, createCustomError } = require("../errors/custom_error");

exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

exports.createTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  res.status(201).json({ tasks });
});

exports.getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id }).exec();
  if (!task) {
    return next(createCustomError("Task Not Found", 404));
  }
  res.status(200).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) return next(createCustomError("Task Not Found", 404));
  res.status(200).json({ task });
});

exports.updateTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) return next(createCustomError("Task Not Found", 404));

  res.status(200).json({ task });
});
