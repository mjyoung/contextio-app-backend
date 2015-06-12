var express = require('express');
var router = express.Router();
var ctxioClient = require('../../helpers/contextio');
var common = require('../../helpers/common');

/*
 * GET /api/2.0/:id/messages
 */
router.get('/', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);

  ctxioClient.accounts(accountId).messages().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:messageId', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var messageId = req.params.messageId;

  ctxioClient.accounts(accountId).messages(messageId).get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:messageId/body', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var messageId = req.params.messageId;

  ctxioClient.accounts(accountId).messages(messageId).body().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:messageId/flags', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var messageId = req.params.messageId;

  ctxioClient.accounts(accountId).messages(messageId).flags().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:messageId/folders', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var messageId = req.params.messageId;

  ctxioClient.accounts(accountId).messages(messageId).folders().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:messageId/headers', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var messageId = req.params.messageId;

  ctxioClient.accounts(accountId).messages(messageId).headers().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:messageId/source', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var messageId = req.params.messageId;

  ctxioClient.accounts(accountId).messages(messageId).source().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:messageId/thread', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var messageId = req.params.messageId;

  ctxioClient.accounts(accountId).messages(messageId).thread().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

module.exports = router;
