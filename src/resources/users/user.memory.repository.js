const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllUsers();

const get = async id => {
  const user = await DB.getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }
  return user;
};

const delete_ = async id => {
  DB.deleteUser(id);
};

const create = async user => {
  return DB.createUser(user);
};

const update = async req => {
  const user = await DB.getUser(req.params.id);
  user.login = req.body.login;
  user.name = req.body.name;
  user.password = req.body.password;
};

module.exports = { getAll, get, create, delete_, update };
