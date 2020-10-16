const router = require('express').Router({ mergeParams: true });
// const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.json(tasks.map(Task.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:taskId').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.boardId, req.params.taskId);
    res.json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  console.log(req.params);
  try {
    const task = await tasksService.create(
      new Task({
        title: req.body.title,
        order: req.body.order,
        description: req.body.description,
        userId: req.body.userId,
        columnId: req.body.columnId,
        boardId: req.params.boardId
      })
    );
    res.json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send();
  }
});

router.route('/:taskId').delete(async (req, res) => {
  try {
    tasksService.delete_(req.params.boardId, req.params.taskId);
    res.status(204).send();
  } catch (e) {
    res.status(404).send();
  }
});

router.route('/:taskId').put(async (req, res) => {
  // try {
  tasksService.update(req);
  res.writeHead(200, { 'Content-Type': 'application/json' }).send();
  // } catch (e) {
  //  res.status(404).send();
  // }
});

module.exports = router;
