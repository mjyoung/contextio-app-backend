module.exports = {
  logRequestData: function (req) {
    console.log('req query', req.query);
    console.log('req params', req.params);
    console.log('req body', req.body);
  },
  getAccountId: function(url) {
    accountId = url.split('/')[4];
    return accountId;
  }
};
