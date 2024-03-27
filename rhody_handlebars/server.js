var express = require('express');
var app = express();
var port = 1337;
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/img'));

app.get(['/','/home'], function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/500', function(req, res) {
    res.render('500');
});

app.get('/404', function(req, res) {
    res.render('404');
});

app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});
