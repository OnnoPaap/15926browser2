

var superagent = require('superagent');

var query = {
    'query': 'select (count(*) as ?cnt) {?s ?p ?o}'
};

var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/sparql-results+json'
};

superagent
    .post('http://infoweb.ws/sparql')
    .set(headers)
    /* .auth('admin', 'admin') */
    .send(query)
    .end(function(err, response) {
        console.log('Superagent:')
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        console.log('BODY: ' + response.text);
    });