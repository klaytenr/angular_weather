var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/weather/dist' ));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./weather/dist/index.html'));
})

app.listen(8000, function(){
    console.log('Listening on port 8000')
});