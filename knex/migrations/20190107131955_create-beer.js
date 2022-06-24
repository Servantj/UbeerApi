const TABLE_NAME = 'BEERS';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments();
  table.string('nom').notNullable();
  table.string('volume').notNullable();
  }).then(function () {
    return knex(TABLE_NAME).insert([
        {nom: "Koko", volume: "0.33cl"},
        {nom: "Delirium", volume: "0.33cl"},
        {nom: "Lefe", volume: "0.33cl"},
        {nom: "Duff", volume: "0.50cl"}
  ]);
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
