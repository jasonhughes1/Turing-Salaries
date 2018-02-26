const alumniData = require('../../../data/2016-2017-alumni.js');


const createAlumni = (knex, alumni) => {
  console.log(alumni);
  return knex('alumni').insert({
    original_cohort: alumni.original_cohort,
    original_start_date: alumni.original_start_date,
    final_cohort: alumni.final_cohort,
    grad_date: alumni.grad_date,
    accepted_date: alumni.accepted_date,
    days_to_offer: alumni.days_to_offer,
    payment_type: alumni.payment_type,
    payment_rate: alumni.payment_rate,
    annualized_salary: alumni.annualized_salary,
    title: alumni.title
  })
};



exports.seed = (knex, Promise) => {
  return knex('alumni').del()
  .then(() => knex('alumni').del())
  .then(() => {
    let alumniPromises = [];

    alumniData.forEach((alumni) => {
      alumniPromises.push(createAlumni(knex, alumni));
    });
    return Promise.all(alumniPromises);
  })
  .catch(error => console.log(`Error seeding data: ${error}`));
};
