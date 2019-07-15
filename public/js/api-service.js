var xhr = new XMLHttpRequest();
var serverEnvironemt = 'http://localhost:3030';

function makeGetRequest(path) {
  xhr.open('GET', serverEnvironemt + path, false);
  xhr.send();

  if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
  } else {
    return JSON.parse(xhr.responseText);
  }
}

function getAllFilms() {
    return makeGetRequest('/films/all');
}

function getAllTags() {
  return makeGetRequest('/tags/all');
}
