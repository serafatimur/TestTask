var express = require("express");
var server = express();
var port = 8080;

server.listen(port, function() {
  console.log('server listening on port ' + port);
});

server.use('/static', express.static(__dirname + '/public'));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

server.get('/markers', (req, res) => {
  res.sendFile(__dirname + '/public/html/markers.html');
});
