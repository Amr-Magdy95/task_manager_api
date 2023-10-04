exports.getAllTasks = (req, res) => {
  res.send("all tasks");
};

exports.createTask = (req, res) => {
  res.json(req.body);
};

exports.getTask = (req, res) => {
  res.json(req.params.id);
};

exports.updateTask = (req, res) => {
  res.json(req.params.id);
};

exports.deleteTask = (req, res) => {
  res.json(req.params.id);
};
