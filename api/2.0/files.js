var express = require('express');
var router = express.Router();
var ctxioClient = require('../../helpers/contextio');
var common = require('../../helpers/common');

/*
 * GET /api/2.0/:id/files
 */
router.get('/', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);

  ctxioClient.accounts(accountId).files().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:fileId', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var fileId = req.params.fileId;

  ctxioClient.accounts(accountId).files(fileId).get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:fileId/changes', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var fileId = req.params.fileId;

  ctxioClient.accounts(accountId).files(fileId).changes().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:fileId/content', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var fileId = req.params.fileId;

  ctxioClient.accounts(accountId).files(fileId).content().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:fileId/related', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var fileId = req.params.fileId;

  ctxioClient.accounts(accountId).files(fileId).related().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:fileId/revisions', function(req, res, next) {
  common.logRequestData(req);
  var accountId = common.getAccountId(req.baseUrl);
  var fileId = req.params.fileId;

  ctxioClient.accounts(accountId).files(fileId).revisions().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

module.exports = router;
