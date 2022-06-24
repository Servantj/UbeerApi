const TABLE_NAME = 'COMPANYS';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments();
  table.string('nom').notNullable();
  table.string('ville').notNullable();
}).then(function () {
  return knex(TABLE_NAME).insert([
      {nom: "Koko", ville: "Orvault"},
      {nom: "Delirium", ville: "Berlin"},
      {nom: "Lefe", ville: "Berlin"},
      {nom: "Duff", ville: "NY"}
]);
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
