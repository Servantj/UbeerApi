import knex from 'knex';

import HttpStatus from 'http-status-codes';
import createHttpError from 'http-errors';
import createApp from './components/express';
import { connect } from './components/db';
import config from './config';
import createRouter from './routes';

// Connect to the database
connect(knex, {
  client: 'mysql2',
  connection: config.db,
  debug: config.db.debug,
  acquireConnectionTimeout: config.db.timeout,
  migrations: {
    tableName: 'migrations',
    directory: './knex/migrations',
  },
})
  /* .then(async (db) => {
    logger.info('Migrating DB to latest version');
    await db.migrate.latest({});
    // logger.info('Loading master data');
    // await db.seed.run();
    return db;
  }) */
  .then(async (db) => {
    const routes = createRouter(db);
    const app = createApp(routes);

    const port = process.env.PORT || 8080;
    app.listen(port , () => {
      console.log('Listening on port', port);
    });
  })
  .catch((error) => {
    createHttpError(HttpStatus.NOT_FOUND, 'Une erreur a été rencontré', error);
  });
