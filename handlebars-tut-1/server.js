var express = require('express');

var app = express();

var port = 1337;

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(request, response){ 
    response.render('index');
});

app.get('/about', function(request, response){
    response.render('about');
});

app.get('/contact', function(request, response){
    response.render('contact');
});

app.listen(port, function(){
    console.log('Server started on http://localhost:' + port);
});