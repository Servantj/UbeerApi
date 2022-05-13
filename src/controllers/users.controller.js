
import createRepoUsers from '../repositories/users.repository';

const getUsers = db => async (req, res, next) => {
  try {
    const repoUsers = createRepoUsers(db);
    const users = await repoUsers.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getByUser = db => async (req, res, next) => {
  try {
    const repoUsers = createRepoUsers(db);
    const id = +req.params.id;
    const user = await repoUsers.findById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const addUsers = db => async (req, res, next) => {
  try {
    const repoUsers = createRepoUsers(db);
    const newUser = {
      tgi: req.body.tgi,
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      mdp: req.body.mdp,
      type: req.body.type,
      disabled: req.body.disabled,
      date_creation: req.body.date_creation,
      date_modification: req.body.date_modification,
    };
    const user = await repoUsers.create(newUser);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUsers = db => async (req, res, next) => {
  try {
    const repoUsers = createRepoUsers(db);
    const id = +req.params.id;
    const user = {
      tgi: req.body.tgi,
      nom: req.body.lastName,
      prenom: req.body.firstName,
      email: req.body.email,
      mdp: req.body.mdp,
      type: req.body.type,
      disabled: req.body.disabled,
      date_creation: req.body.date_creation,
      date_modification: req.body.date_modification,
    };
    await repoUsers.update(id, user);
    const newUser = await repoUsers.findById(id);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export default {
  getUsers,
  updateUsers,
  addUsers,
  getByUser,
};
