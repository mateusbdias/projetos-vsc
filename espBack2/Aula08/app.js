var express = require('express');
var open = require('open');
var axios = require('axios');
var querystring = require('querystring');

var app = express();
app.use(express.static('callback'));

var server = app.listen(0);
var port = server.address().port;

console.info('Listening on port: ' + port + '\n');

app.get('/callback/', function(req, res) {
    res.send('<html><body>It worked, now go do something else!</body></html>');
    var code = req.query.code;
    server.close();

    console.info('Authorization Code: ' + code + '\n');

    axios.post('http://localhost:8082/realms/digitalhouse/protocol/openid-connect/token', querystring.stringify({
        client_id: 'aula08',
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:' + port + '/callback',
        code: code
    })).then(res => {
        console.log('Access Token: ' + res.data.access_token + '\n');
    }).catch(error => {
        console.error(error);
    });
});

open('http://localhost:8082/realms/digitalhouse/protocol/openid-connect/auth?client_id=aula08&redirect_uri=http://localhost:' + port + '/callback&response_type=code');