const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = (boardId, taskId) => tasksRepo.get(boardId, taskId);

const create = task => tasksRepo.create(task);

const delete_ = (boardId, id) => tasksRepo.delete_(boardId, id);

const update = req => tasksRepo.update(req);

module.exports = { getAll, get, create, delete_, update };
