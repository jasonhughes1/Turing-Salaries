
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set('port', process.env.PORT || 5000);

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use('/', express.static(`${__dirname}/client/build`));

const requireHTTPS = (request, response, next) => {
  if(request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  next()
}

if (process.env.NODE_ENV === 'production') { 
  app.use(requireHTTPS); 
}


app.get('/api/v1/alumni', (request, response) => {
  database('alumni').select()
    .then(alumnus => {
      return response.status(200).json(alumnus);
    })
    .catch(error => {
      return response.status(500).json(error);
    });
});


app.listen(app.get('port'));

module.exports = app;
