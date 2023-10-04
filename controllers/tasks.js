exports.getAllTasks = (req, res) => {
  res.send("all tasks");
};

exports.createTask = (req, res) => {
  res.send("create task");
};

exports.getTask = (req, res) => {
  res.send("get a single task");
};

exports.updateTask = (req, res) => {
  res.send("update a single task");
};

exports.deleteTask = (req, res) => {
  res.send("delete a single task");
};
