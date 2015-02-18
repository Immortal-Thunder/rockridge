'use strict';

// var User = require('./api/user/user.model');

module.exports = function(app) {
  
  app.use('/api/user', require('./api/user/'));
  app.use('/auth', require('./auth/'));
  
   // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(function(req, res){
  	res.sendStatus(404);
  });
   
  app.route('/*')
  .get(function(req, res) {
    res.sendFile('index.html', { root: './client/' });
  });
};
