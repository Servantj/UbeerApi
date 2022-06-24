import { Router } from 'express';
import createHttpError from 'http-errors';
import HttpStatus from 'http-status-codes';

import usersController from './controllers/users.controller';
import beersController from './controllers/beers.controller';
import companysController from './controllers/companys.controller';

const createRouter = (db) => {
  const router = new Router();

  router.get('/', (req, res) => {
    res.json({ message: 'Hello World !!!' });
  });

  router.get('/users', usersController.getUsers(db));

  router.post('/users', usersController.addUsers(db));

  router.put('/users/:id', usersController.updateUsers(db));

  router.get('/users/:id', usersController.getByUser(db));

  router.get('/beers', beersController.getBeers(db));

  router.post('/beers', beersController.addBeers(db));

  router.put('/beer/:id', beersController.updateBeers(db));

  router.get('/beer/:id', beersController.getByBeer(db));
  
  router.get('/companys', companysController.getCompanys(db));

  router.post('/companys', companysController.addCompanys(db));

  router.put('/company/:id', companysController.updateCompanys(db));

  router.get('/company/:id', companysController.getByCompany(db));
  

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
