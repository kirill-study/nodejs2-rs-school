const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const delete_ = board => boardsRepo.delete_(board);

const update = req => boardsRepo.update(req);

module.exports = { getAll, get, create, delete_, update };
