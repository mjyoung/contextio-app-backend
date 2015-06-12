var express = require('express');
var router = express.Router();
var ctxioClient = require('../../helpers/contextio');
var common = require('../../helpers/common');

/*
 * GET /api/2.0/:id/sources
 */
router.get('/', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);

  ctxioClient.accounts(accountId).sources().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:label', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var label = req.params.label;

  ctxioClient.accounts(accountId).sources(label).get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:label/folders', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var label = req.params.label;

  ctxioClient.accounts(accountId).sources(label).folders().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:label/folders/:folder', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var label = req.params.label;
  var folder = req.params.folder;

  ctxioClient.accounts(accountId).sources(label).folders(folder).get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

// this one current doesn't work. the npm module needs to be updated.
router.get('/:label/folders/:folder/messages', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var label = req.params.label;
  var folder = req.params.folder;

  ctxioClient.accounts(accountId).sources(label).folders(folder).messages().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

module.exports = router;
