const TABLE_NAME = 'BEERS';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments();
  table.string('nom').notNullable();
  table.string('volume').notNullable();
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
