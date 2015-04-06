module.exports = function(app) {
  var express = require('express');
  var websitesRouter = express.Router();

  websitesRouter.get('/', function(req, res) {
    res.send({
      'websites': []
    });
  });

  websitesRouter.post('/', function(req, res) {
    res.send({website: { id: 1, url: "http://example.com"} }).status(201).end();
  });

  websitesRouter.get('/:id', function(req, res) {
    res.send({
      'websites': {
        id: req.params.id
      }
    });
  });

  websitesRouter.put('/:id', function(req, res) {
    res.send({
      'websites': {
        id: req.params.id
      }
    });
  });

  websitesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/websites', websitesRouter);
};
