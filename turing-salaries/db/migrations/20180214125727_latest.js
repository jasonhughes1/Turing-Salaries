exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('alumni', function(table) {
      table.increments('id').primary();
      table.string('original_cohort');
      table.date('original_start_date');
      table.string('final_cohort');
      table.date('grad_date');
      table.date('accepted_date');
      table.integer('days_to_offer')
      table.string('payment_type');
      table.decimal('payment_rate', null);
      table.decimal('annualized_salary', null);
      table.string('title');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('alumni')
  ]);
};
