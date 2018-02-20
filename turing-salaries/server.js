
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.get('/api/v1/alumni', (request, response) => {
  database('alumni').select()
    .then(alumnus => {
      return response.status(200).json(alumnus);
    })
    .catch(error => {
      return response.status(500).json(error);
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
