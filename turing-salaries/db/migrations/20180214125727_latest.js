exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('alumnus', function(table) {
      table.increments('id').primary();
      table.string('original_cohort');
      table.date('original_start_date');
      table.string('final_cohort');
      table.date('grad_date');

    }),

    knex.schema.createTable('offers', function(table) {
      table.increments('id').primary();
      table.date('accepted_date');
      table.string('payment_type');
      table.decimal('payment_rate');
      table.decimal('annualized_salary');
      table.string('title');
      table.integer('alumnus_id').unsigned();
      table.foreign('alumnus_id').references('alumnus.id')

    })

  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('alumnus');
    knex.schema.dropTable('offers')
  ]);
};
