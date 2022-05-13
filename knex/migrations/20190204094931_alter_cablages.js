const TABLE_NAME = 'CABLAGES';

exports.up = knex => knex.schema.table(TABLE_NAME, (table) => {
  table
    .integer('id_user')
    .unsigned()
    .nullable()
    .references('id')
    .inTable('USERS');
  table
    .integer('id_equipement')
    .unsigned()
    .nullable()
    .references('id')
    .inTable('EQUIPEMENTS');
});
exports.down = knex => knex.schema.table(TABLE_NAME, (table) => {
  table.dropForeign('id_user');
  table.dropForeign('id_equipement');
});
