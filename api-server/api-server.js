var fs = require('fs');
var bodyparser = require('body-parser');
var express = require('express');

var filmsData = fs.readFileSync('./api-server/jsons/films.json', 'utf8');
var tagsData = fs.readFileSync('./api-server/jsons/tags.json', 'utf8');

var films = JSON.parse(filmsData);
var tags = JSON.parse(tagsData);

var server = express();
var port = 3030;

server.listen(port, function() {
  console.log('server listening on port ' + port);
});

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(bodyparser.urlencoded({ extended:false }));
server.use(bodyparser.json());


server.get('/films/all', sendAllFilms);
server.get('/tags/all', sendAllTags);

function sendAllFilms(request, response){
  response.send(films);
}

function sendAllTags(request, response){
  response.send(tags);
}
