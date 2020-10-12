const User = require('../resources/users/user.model');
const DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => {
  return [...DB];
};

const getUser = async id => DB.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return user;
};

const deleteUser = async id => {
  DB.splice(DB.indexOf(id), 1);
};

module.exports = { getAllUsers, getUser, createUser, deleteUser };
