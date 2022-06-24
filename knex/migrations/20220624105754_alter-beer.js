const TABLE_NAME = 'BEERS';

exports.up = knex => knex.schema.alterTable(TABLE_NAME, (table) => {
    table
      .integer("companyId")
      .unsigned()
      .references("id")
      .inTable("COMPANYS");
    }).then(function () {
        return knex(TABLE_NAME).insert([
            {nom: "Koko", volume: "0.33cl",companyId: 1},
            {nom: "Delirium", volume: "0.33cl",companyId: 2},
            {nom: "Lefe", volume: "0.33cl",companyId: 3},
            {nom: "Duff", volume: "0.50cl",companyId: 4}
    ]);
});

exports.down = function(knex) {};
