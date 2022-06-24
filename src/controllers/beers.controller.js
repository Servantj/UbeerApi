
import createRepoBeers from '../repositories/beers.repository';

const getBeers = db => async (req, res, next) => {
  try {
    const repoBeers = createRepoBeers(db);
    const beers = await repoBeers.findAll();
    res.json(beers);
  } catch (error) {
    next(error);
  }
};

const getByBeer = db => async (req, res, next) => {
  try {
    const repoBeers = createRepoBeers(db);
    const id = +req.params.id;
    const beer = await repoBeers.findById(id);
    res.json(beer);
  } catch (error) {
    next(error);
  }
};

const addBeers = db => async (req, res, next) => {
  try {
    const repoBeers = createRepoBeers(db);
    const newBeers = {
        nom: req.body.lastName,
        volume: req.body.volume,
    };
    const beer = await repoBeers.create(newBeers);
    res.json(beer);
  } catch (error) {
    next(error);
  }
};

const updateBeers = db => async (req, res, next) => {
  try {
    const repoBeers = createRepoBeers(db);
    const id = +req.params.id;
    const beer = {
        nom: req.body.lastName,
        volume: req.body.volume,
    };
    await repoBeers.update(id, beer);
    const newBeers = await repoBeers.findById(id);
    res.json(newBeers);
  } catch (error) {
    next(error);
  }
};

export default {
  getBeers,
  updateBeers,
  addBeers,
  getByBeer,
};
