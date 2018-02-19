const alumniData = require('../../../data/2016-2017-alumni.js');
const offersData = require('../../../data/2016-2017-offers.js');


const createAlumni = (knex, alumni) => {
  return knex('alumni').insert({
    original_cohort: alumni.original_cohort,
    original_start_date: alumni.original_start_date,
    final_cohort: alumni.final_cohort,
    grad_date: alumni.grad_date
  }, 'id')
  .then(alumniId => {
    let offerPromises = [];

    offersData.forEach(offers => {
      offerPromises.push(
        createOffer(knex, {
          accepted_date: offers.accepted_date,
          days_to_offer: offers.days_to_offer,
          payment_type: offers.payment_type,
          payment_rate: offers.payment_rate,
          annualized_salary: offers.annualized_salary,
          title: offers.title,
          alumni_id: alumniId[0]
        })
      )
    });
    return Promise.all(offerPromises);
  })
};

const createOffer = (knex, offer) => {
  return knex('offers').insert(offer);
};


exports.seed = (knex, Promise) => {
  return knex('offers').del()
  .then(() => knex('alumni').del())
  .then(() => {
    let alumniPromises = [];

    alumniData.forEach(alumni => {
      alumniPromises.push(createAlumni(knex, alumni));
    });
    return Promise.all(alumniPromises);
  })
  .catch(error => console.log(`Error seeding data: ${error}`));
};
