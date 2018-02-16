exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('alumni', function(table) {
      table.increments('id').primary();
      table.string('company');
      table.string('salary');
      table.string('location');
      table.string('offer_accepted_date');
      table.string('graduating_cohort');
      table.string('program');



      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('alumni') 
  ]);
};
