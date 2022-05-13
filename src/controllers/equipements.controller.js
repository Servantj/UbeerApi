
import createRepoEquipement from '../repositories/equipements.repository';

const getEquipement = db => async (req, res, next) => {
  try {
    const repoEquipement = createRepoEquipement(db);
    const wip = await repoEquipement.findAll();
    res.json(wip);
  } catch (error) {
    next(error);
  }
};

const addEquipement = db => async (req, res, next) => {
  try {
    const repoEquipement = createRepoEquipement(db);
    const newEquipement = {
      num_ordre: req.body.num_ordre,
      num_avis: req.body.num_avis,
      type: req.body.type,
      flag_critique: req.body.flag_critique,
      pn: req.body.pn,
      sn: req.body.sn,
      design_pn_in: req.body.design_pn_in,
      design_client: req.body.design_client,
      nom_responsable: req.body.nom_responsable,
      ordre_post_resp: req.body.ordre_post_resp,
      tat_objectif: req.body.tat_objectif,
      date_creation: req.body.date_creation,
      date_modification: req.body.date_modification,
    };
    const equipement = await repoEquipement.create(newEquipement);
    res.json(equipement);
  } catch (error) {
    next(error);
  }
};

const getByEquipement = db => async (req, res, next) => {
  try {
    const repoEquipement = createRepoEquipement(db);
    const id = req.params.num_ordre;
    const order = await repoEquipement.findById(id);
    res.json(order);
  } catch (error) {
    next(error);
  }
};

const updateEquipement = db => async (req, res, next) => {
  try {
    const repoEquipement = createRepoEquipement(db);
    const id = req.params.num_order;
    const equipement = {
      num_avis: req.body.num_avis,
      type: req.body.type,
      flag_critique: req.body.flag_critique,
      pn: req.body.pn,
      sn: req.body.sn,
      design_pn_in: req.body.design_pn_in,
      design_client: req.body.design_client,
      nom_responsable: req.body.nom_responsable,
      ordre_post_resp: req.body.ordre_post_resp,
      tat_objectif: req.body.tat_objectif,
      date_creation: req.body.date_creation,
      date_modification: req.body.date_modification,
    };
    await repoEquipement.update(id, equipement);
    const newEquipement = await repoEquipement.findById(id);
    res.json(newEquipement);
  } catch (error) {
    next(error);
  }
};

export default {
  getEquipement,
  getByEquipement,
  addEquipement,
  updateEquipement,
};
