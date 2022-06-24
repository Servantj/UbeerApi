
import createRepoCompanys from '../repositories/companys.repository';

const getCompanys = db => async (req, res, next) => {
  try {
    const repoCompanys = createRepoCompanys(db);
    const companys = await repoCompanys.findAll();
    res.json(companys);
  } catch (error) {
    next(error);
  }
};

const getByCompany = db => async (req, res, next) => {
  try {
    const repoCompanys = createrepoCompanys(db);
    const id = +req.params.id;
    const company = await repoCompanys.findById(id);
    res.json(company);
  } catch (error) {
    next(error);
  }
};

const addCompanys = db => async (req, res, next) => {
  try {
    const repoCompanys = createrepoCompanys(db);
    const newCompany = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      mdp: req.body.mdp,
      date_creation: req.body.date_creation,
      date_modification: req.body.date_modification,
    };
    const company = await repoCompanys.create(newCompany);
    res.json(company);
  } catch (error) {
    next(error);
  }
};

const updateCompanys = db => async (req, res, next) => {
  try {
    const repoCompanys = createrepoCompanys(db);
    const id = +req.params.id;
    const company = {
      nom: req.body.lastName,
      prenom: req.body.firstName,
      email: req.body.email,
      mdp: req.body.mdp,
      date_creation: req.body.date_creation,
      date_modification: req.body.date_modification,
    };
    await repoCompanys.update(id, company);
    const newCompany = await repoCompanys.findById(id);
    res.json(newCompany);
  } catch (error) {
    next(error);
  }
};

export default {
    getCompanys,
    updateCompanys,
    addCompanys,
    getByCompany,
};
