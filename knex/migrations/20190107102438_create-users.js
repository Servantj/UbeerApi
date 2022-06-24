const TABLE_NAME = 'USERS';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments();
  table.string('nom').notNullable();
  table.string('prenom').notNullable();
  table.string('email').notNullable();
  table.string('mdp');
  table.date('date_creation').notNullable();
  table.date('date_modification').notNullable();
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
