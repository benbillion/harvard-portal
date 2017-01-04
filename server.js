var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000;
var favicon = require('serve-favicon');

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/Login.html');
})

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT);
});