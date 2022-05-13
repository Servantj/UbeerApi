
import createRepoCablages from '../repositories/cablages.repository';
import createRepoEquipement from '../repositories/equipements.repository';

export default async (db, body) => {
  const repoEquipement = createRepoEquipement(db);
  const repoCablages = createRepoCablages(db);
  const dateNow = new Date(Date.now());

  const newEquipement = {
    num_ordre: body.num_ordre,
    num_avis: body.num_avis,
    type: body.type,
    flag_critique: body.flag_critique,
    pn: body.pn,
    sn: body.sn,
    design_pn_in: body.design_pn_in,
    design_client: body.design_client,
    nom_responsable: body.nom_responsable,
    ordre_post_resp: body.ordre_post_resp,
    tat_objectif: body.tat_objectif,
    date_creation: dateNow,
    date_modification: dateNow,
  };
  const equipementCreatedId = await repoEquipement.create(newEquipement);

  const newCablage = {
    id_equipement: equipementCreatedId,
    date_arrivee: dateNow,
    temps_estime_cablage: body.temps_estime_cablage,
    date_debut_cablage: body.date_debut_cablage,
    date_fin_cablage: body.date_fin_cablage,
    date_sortie: body.date_sortie,
    date_creation: dateNow,
    date_modification: dateNow,
  };
  const cablageCreatedId = repoCablages.create(newCablage);

  return cablageCreatedId;
};
