const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const delete_ = user => usersRepo.delete_(user);

const update = req => {
  usersRepo.update(req);
};

module.exports = { getAll, get, create, delete_, update };
