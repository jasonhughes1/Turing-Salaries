process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should('should');
const chaiHttp = require('chai-http');
const server = require('../server');

const knex = require('../db/knex');

chai.use(chaiHttp);


  describe('GET /api/v1/alumni', () => {
    it('should GET all of the alumni salary data', () => {
      return chai.request(server)
        .get('/api/v1/alumni')
        .then(response => {
          response.should.have.status(200);
          response.should.be.json;
        })
        .catch(error => {
          throw error;
      });
    });

    it('should return 404 status if the url is mistyped', () => {
  return chai.request(server)
    .get('/api/v1/alllumni')
    .then(() => {
      console.log('response');
    })
    .catch(response => {
      response.should.have.status(404);
      });
    });
  });
