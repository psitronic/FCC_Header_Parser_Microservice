var express = require('express');
var app = express();

app.get("/api/whoami", (req, res, next) => {
  var ua = req.get('User-Agent');
  var al = req.get('Accept-Language');
  res.json({
    "ipaddress": req.ip,
    "language": al,
    "software": ua
  });
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
