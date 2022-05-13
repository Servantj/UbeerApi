const TABLE_NAME = 'CABLAGES';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments();
  table.datetime('date_arrivee').notNullable();
  table.time('temps_estime_cablage');
  table.datetime('date_debut_cablage');
  table.datetime('date_fin_cablage');
  table.datetime('date_sortie');

  table.date('date_creation').notNullable();
  table.date('date_modification').notNullable();
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
