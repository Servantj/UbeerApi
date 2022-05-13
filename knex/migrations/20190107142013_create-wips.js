const TABLE_NAME = 'WIPS';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.string('num_ordre').primary().notNullable();
  table.string('num_avis').notNullable();
  table.string('design_client').notNullable();
  table.enu('flag_critique', [1]).notNullable();
  table.string('nom_responsable').notNullable();
  table.string('ordre_post_resp').notNullable();
  table.string('pn').notNullable();
  table.string('sn').notNullable();
  table.string('design_pn_in').notNullable();

  table.integer('tat_objectif').notNullable();
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
