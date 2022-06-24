const TABLE_NAME = 'USERS';

exports.up = knex => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments();
  table.string('nom').notNullable();
  table.string('prenom').notNullable();
  table.string('email').notNullable();
  table.string('mdp');
  table.date('date_creation').notNullable();
  table.date('date_modification').notNullable();
}).then(function () {
    return knex(TABLE_NAME).insert([
        {nom: "A", prenom: "A",email:"amail@test.com",date_creation: "2020-10-02",date_modification:"2020-10-02"},
        {nom: "B", prenom: "BB",email:"jmail@test.com",date_creation: "2020-10-01",date_modification:"2020-10-01"},
        {nom: "C", prenom: "CCC",email:"dmail@test.com",date_creation: "2020-10-03",date_modification:"2020-10-03"},
        {nom: "D", prenom: "DDDD",email:"email@test.com",date_creation: "2020-10-04",date_modification:"2020-10-04"}
    ]);
});

exports.down = knex => knex.schema.dropTable(TABLE_NAME);
