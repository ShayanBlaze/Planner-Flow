const Task = require("../model/Task");
const { createCustomError } = require("../errors/custom-error");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  const completedTasks = tasks.filter((task) => task.completed === true);
  const completedTasksLength = completedTasks.length;

  res.status(200).json({
    status: "success",
    amount: tasks.length,
    completedOnes: completedTasksLength,
    tasks: tasks,
  });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404));
  }

  res
    .status(200)
    .json({ msg: `the task with id ${taskID} deleted successfully` });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
