import knex from 'knex';

import { connect } from '../../src/components/db';

export const connectToDb = async config => connect(knex, {
  client: 'mysql2',
  connection: config.db,
});

export default {
  connectToDb,
};
