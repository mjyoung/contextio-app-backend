== Context IO Backend

Note: added helpers/contextio.js to gitignore because it contains my keys.

`helpers/contextio.js`:
```javascript
var ContextIO = require('contextio');
var ctxioClient = new ContextIO.Client({
  key: "myKeyHere",
  secret: "mySecretHere"
});

module.exports = ctxioClient;
```