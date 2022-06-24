const TABLE_NAME = 'BEERS';

exports.up = knex => knex.schema.alterTable(TABLE_NAME, (table) => {
    table
      .integer("companyId")
      .unsigned()
      .references("id")
      .inTable("COMPANYS");
});

exports.down = function(knex) {};
