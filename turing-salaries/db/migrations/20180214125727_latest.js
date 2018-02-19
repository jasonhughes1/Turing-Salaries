exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('alumni', function(table) {
      table.increments('id').primary();
      table.string('original_cohort');
      table.date('original_start_date');
      table.string('final_cohort');
      table.date('grad_date');
    }),

    knex.schema.createTable('offers', function(table) {
      table.increments('id').primary();
      table.date('accepted_date');
      table.integer('days_to_offer')
      table.string('payment_type');
      table.decimal('payment_rate', null);
      table.decimal('annualized_salary', null);
      table.string('title');
      table.integer('alumni_id').unsigned();
      table.foreign('alumni_id').references('alumni.id');
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('offers'),
    knex.schema.dropTable('alumni')
  ]);
};
