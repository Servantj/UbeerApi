// Update with your config settings.

module.exports = {

  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'ubeer',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || '3306',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './knex/migrations',
  },
};
