var express = require('express');
var router = express.Router();
var ctxioClient = require('../../helpers/contextio');
var common = require('../../helpers/common');

/*
 * GET /api/2.0/:id/contacts
 */
router.get('/', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);

  ctxioClient.accounts(accountId).contacts().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:email', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var email = req.params.email;

  ctxioClient.accounts(accountId).contacts(email).get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:email/files', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var email = req.params.email;

  ctxioClient.accounts(accountId).contacts(email).files().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:email/messages', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var email = req.params.email;

  ctxioClient.accounts(accountId).contacts(email).messages().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:email/threads', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var email = req.params.email;

  ctxioClient.accounts(accountId).contacts(email).threads().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

module.exports = router;
