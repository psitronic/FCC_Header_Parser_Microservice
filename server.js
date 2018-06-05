var express = require('express');
var reqIP = require("request-ip");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/api/whoami", (req, res, next) => {
  var ua = req.get('User-Agent');
  var al = req.get('Accept-Language');
  res.json({
    "ipaddress": reqIP.getClientIp(req),
    "language": al,
    "software": ua
  });
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
