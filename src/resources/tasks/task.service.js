const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = (boardId, taskId) => {
  try {
    return tasksRepo.get(boardId, taskId);
  } catch (e) {
    throw new Error('d');
  }
};

const create = task => tasksRepo.create(task);

const delete_ = (boardId, taskId) => {
  try {
    tasksRepo.delete_(boardId, taskId);
  } catch (e) {
    throw new Error('d');
  }
};

const update = req => tasksRepo.update(req);

module.exports = { getAll, get, create, delete_, update };
