var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var port = 3000;
var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Index.html'));
});

app.listen(port, function() {
    console.log('App listening on port :' + port);
});