const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllBoards();

const get = async id => {
  const board = await DB.getBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} was not found`);
  }
  return board;
};

const delete_ = async id => {
  DB.deleteBoard(id);
};

const create = async board => {
  return DB.createBoard(board);
};

const update = async req => {
  const board = await DB.getBoard(req.params.id);
  board.id = req.body.id;
  board.title = req.body.title;
  board.columns = req.body.columns;
};

module.exports = { getAll, get, create, delete_, update };
