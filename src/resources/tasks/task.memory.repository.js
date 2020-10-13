const DB = require('../../common/inMemoryDB');

const getAll = async boardId => DB.getAllTasks(boardId);

const get = async (boardId, taskId) => {
  const task = await DB.getTask(boardId, taskId);

  if (!task) {
    throw new Error(`The task with id: ${taskId} was not found`);
  }
  return task;
};

const delete_ = async id => {
  DB.deleteTask(id);
};

const create = async task => {
  return DB.createTask(task);
};

const update = async req => {
  console.log(
    task.title,
    task,
    req.params.id,
    req.body.title,
    'console.log3 update'
  );
  const task = await DB.getTask(req.params.taskId);
  // task.id = req.params.id;
  task.title = req.body.title;
  task.columns = req.body.columns;
};

module.exports = { getAll, get, create, delete_, update };
