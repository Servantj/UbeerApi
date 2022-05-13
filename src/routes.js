import { Router } from 'express';
import createHttpError from 'http-errors';
import HttpStatus from 'http-status-codes';

import usersController from './controllers/users.controller';
import cablageController from './controllers/cablages.controller';
import wipController from './controllers/wips.controller';
import equipementController from './controllers/equipements.controller';

const createRouter = (db) => {
  const router = new Router();

  router.get('/', (req, res) => {
    res.json({ message: 'Hello World !!!' });
  });

  router.get('/users', usersController.getUsers(db));

  router.post('/users', usersController.addUsers(db));

  router.put('/users/:id', usersController.updateUsers(db));

  router.get('/users/:id', usersController.getByUser(db));

  router.get('/cablage', cablageController.getCablage(db));

  router.post('/cablage', cablageController.addCablage(db));

  router.get('/cablage/clos', cablageController.getByClos(db));

  router.get('/cablage/notClos', cablageController.getNotClos(db));

  router.put('/cablage/:id', cablageController.updateCablage(db));

  router.get('/cablage/:id', cablageController.getByCablage(db));

  router.get('/wip', wipController.getWip(db));

  router.post('/wip', wipController.addWip(db));

  router.get('/wip/:ordre', wipController.getByOrder(db));

  router.get('/equipement', equipementController.getEquipement(db));

  router.post('/equipement', equipementController.addEquipement(db));

  router.get('/equipement/:num_ordre', equipementController.getByEquipement(db));

  router.put('/equipement/:num_order', equipementController.updateEquipement(db));

  router.all('*', (req, res, next) => {
    next(createHttpError(HttpStatus.NOT_FOUND, 'Le chemin n`est pas valide'));
  });
  router.use((err, req, res) => {
    const errCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

    console.log(errCode); // eslint-disable-line
    res.status(err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).json(err);
  });
  return router;
};

export default createRouter;
