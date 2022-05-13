
import createRepoWip from '../repositories/wips.repository';

const getWip = db => async (req, res, next) => {
  try {
    const repoWip = createRepoWip(db);
    const wip = await repoWip.findAll();
    res.json(wip);
  } catch (error) {
    next(error);
  }
};

const addWip = db => async (req, res, next) => {
  try {
    const repoWip = createRepoWip(db);
    const newWip = {
      num_ordre: req.body.num_ordre,
      num_avis: req.body.num_avis,
      design_client: req.body.design_client,
      flag_critique: req.body.flag_critique,
      nom_responsable: req.body.nom_responsable,
      ordre_post_resp: req.body.ordre_post_resp,
      pn: req.body.pn,
      sn: req.body.sn,
      design_pn_in: req.body.design_pn_in,
      tat_objectif: req.body.tat_objectif,
    };
    const wip = await repoWip.create(newWip);
    res.json(wip);
  } catch (error) {
    next(error);
  }
};

const getByOrder = db => async (req, res, next) => {
  try {
    const repoWip = createRepoWip(db);
    const id = req.params.ordre;
    const order = await repoWip.findById(id);
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export default {
  getWip,
  addWip,
  getByOrder,
};
