
import createRepoCablages from '../repositories/cablages.repository';
import createService from '../services/cablages.service';

const getCablage = db => async (req, res, next) => {
  try {
    const repoCablages = createRepoCablages(db);
    const cablages = await repoCablages.findAll();
    res.json(cablages);
  } catch (error) {
    next(error);
  }
};

const getByCablage = db => async (req, res, next) => {
  try {
    const repoCablages = createRepoCablages(db);
    const id = +req.params.id;
    const cablage = await repoCablages.findById(id);
    res.json(cablage);
  } catch (error) {
    next(error);
  }
};

const getByClos = db => async (req, res, next) => {
  try {
    const repoCablages = createRepoCablages(db);
    const cablages = await repoCablages.findByClos();
    res.json(cablages);
  } catch (error) {
    next(error);
  }
};

const getNotClos = db => async (req, res, next) => {
  try {
    const repoCablages = createRepoCablages(db);
    const cablages = await repoCablages.findNotClos();
    res.json(cablages);
  } catch (error) {
    next(error);
  }
};
const addCablage = db => async (req, res, next) => {
  try {
    const cablage = await createService(db, req.body);
    res.json(cablage);
  } catch (error) {
    next(error);
  }
};

const updateCablage = db => async (req, res, next) => {
  try {
    const repoCablages = createRepoCablages(db);
    const id = +req.params.id;
    const Cablage = {
      date_arrivee: req.body.date_arrivee,
      temps_estime_cablage: req.body.temps_estime_cablage,
      date_debut_cablage: req.body.date_debut_cablage,
      date_fin_cablage: req.body.date_fin_cablage,
      date_sortie: req.body.date_sortie,
      date_creation: req.body.date_creation,
      date_modification: req.body.date_modification,
    };
    await repoCablages.update(id, Cablage);
    const newCablage = await repoCablages.findById(id);
    res.json(newCablage);
  } catch (error) {
    next(error);
  }
};

export default {
  getCablage,
  addCablage,
  updateCablage,
  getByCablage,
  getByClos,
  getNotClos,
};
