const DB = require('../../common/inMemoryDB');

const getAll = async boardId => DB.getAllTasks(boardId);

const get = async (boardId, taskId) => {
  const task = await DB.getTask(boardId, taskId);

  return task;
};

const delete_ = async (boardId, taskId) => {
  const task = DB.deleteTask(boardId, taskId);
  if (!task) throw new Error();
};

const create = async task => {
  return DB.createTask(task);
};

const update = async req => {
  get(req.params.boardId, req.params.taskId).title = req.body.title;
};

module.exports = { getAll, get, create, delete_, update };
