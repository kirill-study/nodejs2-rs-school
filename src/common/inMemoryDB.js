const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
const DB = { users: [], boards: [], tasks: [] };

// #region Users

DB.users.push(new User(), new User(), new User());

const getAllUsers = async () => {
  return [...DB.users];
};

const getUser = async id => DB.users.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.users.push(user);
  return user;
};

const deleteUser = async id => {
  DB.users.splice(DB.users.indexOf(id), 1);
  console.log(DB.tasks[0], 'console.log');
  DB.tasks.forEach(el => (el.userId === id ? (el.userId = null) : el.userId));
};

// const unassignUsersTasks = async id =>

// #endregion

// #region Boards

DB.boards.push(new Board(), new Board(), new Board());

const getAllBoards = async () => {
  return [...DB.boards];
};

const getBoard = async id => DB.boards.filter(el => el.id === id)[0];

const createBoard = async board => {
  DB.boards.push(board);
  return board;
};

const deleteBoard = async id => {
  DB.boards.splice(DB.boards.indexOf(id), 1);
  getAllTasks(id).forEach(el =>
    el.boardId === id ? deleteTask(id) : el.boardId
  );
};

// #endregion

// #region Tasks

DB.boards.push(new Task(), new Task(), new Task());

const getAllTasks = async boardId =>
  DB.tasks.filter(el => el.boardId === boardId)[0];

const getTask = async (boardId, taskId) => {
  // console.log(DB.tasks[0].id, taskId, boardId, 'console.log2');
  return DB.tasks.filter(el => el.id === taskId)[0];
};

const createTask = async task => {
  DB.tasks.push(task);
  return task;
};

const deleteTask = async id => {
  DB.tasks.splice(DB.tasks.indexOf(id), 1);
  return DB.tasks;
};

// #endregion

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  // unassignUsersTasks,

  getAllBoards,
  getBoard,
  createBoard,
  deleteBoard,

  getAllTasks,
  getTask,
  createTask,
  deleteTask
};
