const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/players', function (req, res) {
	res.sendFile(path.join(__dirname, '/players.html'));
})

app.listen(3000);
app.use(express.static(__dirname));
