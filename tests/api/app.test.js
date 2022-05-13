import test from 'ava';

import request from 'supertest';
import HttpStatus from 'http-status-codes';

import config from '../../src/config';
import { connectToDb } from '../helpers/db.helpers';
import createRouter from '../../src/routes';
import createApp from '../../src/components/express';

test.beforeEach('create Context', async (t) => {
  const db = await connectToDb(config);
  const routes = createRouter(db);
  const app = createApp(routes);
  t.context = {
    app,
    db,
  };
});

test('GET / -> 200 OK', async (t) => {
  // GIVEN = état initial avant l'appel
  const { app } = t.context;
  // WHEN = le ou les évenements exécutés
  const res = await request(app).get('/');
  // THEN = controle du résultat
  t.is(typeof res, 'object');
  t.is(res.status, HttpStatus.OK);
  const data = res.body;
  t.is(typeof data, 'object');
  t.is(data.message, 'Hello World !!!');
  // AFTER = raz des modifs de l'état initial
});

test('GET /UKNOW_ROUTE -> 404 NOT_FOUND', async (t) => {
  // GIVEN = état initial avant l'appel
  const { app } = t.context;
  // WHEN = le ou les évenements exécutés
  const res = await request(app).get('/UNKNOWN_ROUTE');
  // THEN = controle du résultat
  t.is(typeof res, 'object');
  t.is(res.status, HttpStatus.NOT_FOUND);
  // AFTER = raz des modifs de l'état initial
});


test('POST /users -> 201 CREATED', async (t) => {
  // GIVEN = état initial avant l'appel
  const { app, db } = t.context;
  const newUser = {
    tgi: 'Test_api',
    nom: 'test',
    prenom: 'AZ',
    email: 'Ae',
    date_creation: '2018-09-18',
    date_modification: '2016-12-23',
  };
  // WHEN = le ou les évenements exécutés
  const res = await request(app).post('/users')
    .send(newUser)
    .set('Content-Type', 'application/json');
  // THEN = controle du résultat
  t.is(typeof res, 'object');
  t.is(res.status, HttpStatus.OK);
  // AFTER = raz des modifs de l'état initial
  const deletedNb = await db('USERS').where('tgi', 'Test_api').del();
  t.is(deletedNb, 1);
});
