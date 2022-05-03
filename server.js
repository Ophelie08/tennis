const express = require('express');
const path = require('path');

const app = express();


/* Routes Definitions */
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/players', function (req, res) {
	res.sendFile(path.join(__dirname, '/players.html'));
});

app.get('/history', function (req, res) {
	res.sendFile(path.join(__dirname, '/history.html'));
});

app.get('/table', function (req, res) {
	res.sendFile(path.join(__dirname, '/table.html'));
});

app.get('/program', function (req, res) {
	res.sendFile(path.join(__dirname, '/program.html'));
});

app.listen(8000);
app.use(express.static(__dirname));
