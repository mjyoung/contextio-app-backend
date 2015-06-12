var express = require('express');
var router = express.Router();
var ctxioClient = require('../../helpers/contextio');
var common = require('../../helpers/common');

/*
 * GET /api/2.0/:id
 */
router.get('/', function(req, res, next) {
  common.logRequestData(req);

  ctxioClient.accounts().get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

router.get('/:id', function(req, res, next) {
  common.logRequestData(req);
  var accountId = req.params.id;

  ctxioClient.accounts(accountId).get(req.query, function (err, response) {
    if (err) throw err;
    return res.json(response.body);
  });
});

module.exports = router;
