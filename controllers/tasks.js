const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(201).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id }).exec();
    if (!task) return res.status(404).json({ msg: "could not find user" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) return res.status(404).json({ msg: "task not found" });
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).json({ msg: "task not found" });

    res.status(200).json({ task });
  } catch (err) {}
};
