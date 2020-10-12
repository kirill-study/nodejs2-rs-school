const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.get(req.params.id);
    // map user fields to exclude secret fields like "password"
    res.json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      login: req.body.login,
      password: req.body.password,
      name: req.body.name
    })
  );

  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  usersService.delete_(req.params.id);
  res.status(204).send();
});

router.route('/:id').put(async (req, res) => {
  usersService.update(req);
  res.writeHead(200, { 'Content-Type': 'application/json' }).send();
});

module.exports = router;
