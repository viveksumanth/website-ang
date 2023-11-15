const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '/dist/browser')));

app.get('/*', function(req, resp) {
    console.log(path.join(__dirname, '/dist/browser/index.html'));
    resp.sendFile(path.join(__dirname, '/dist/browser/index.html'));
});

app.listen(process.env.PORT || 8080);