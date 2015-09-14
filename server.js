var express = require('express');
var app = express();
var path = require("path");

var dirname = path.join(__dirname, './');
console.log(dirname);
app.use(express.static(dirname));

app.get('/tennis', function (req, res) {
  res.sendFile(path.join(dirname+'/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
}); 