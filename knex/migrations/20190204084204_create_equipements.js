const TABLE_NAME = 'EQUIPEMENTS';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments();
  table.string('num_ordre').notNullable();
  table.string('num_avis').notNullable();
  table.enu('type', ['minute', 'heure', 'prod', 'interne']);
  table.enu('flag_critique', [1]).notNullable();
  table.string('pn').notNullable();
  table.string('sn').notNullable();
  table.string('design_pn_in').notNullable();
  table.string('design_client').notNullable();
  table.string('nom_responsable').notNullable();
  table.string('ordre_post_resp').notNullable();
  table.integer('tat_objectif').notNullable();

  table.date('date_creation').notNullable();
  table.date('date_modification').notNullable();
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
