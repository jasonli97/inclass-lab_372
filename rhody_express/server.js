const express = require('express'); 

const app = express();

const PORT = 1337;

const dir = __dirname + '/public';

app.use(function(request, response){
	// tell the browser that the data is in plaintext
    response.type('text/plain');
	
	// tell the browser the route cannot be found
    response.status(404);

	// write that the page cannot be found to the body of the page
    response.send('Page not found');
});


app.get(['/', '/index'], function (request, response) {
    response.type('text/plain');
    response.send('Rhody Travel');
});

app.get('/about', function (request, response) {
    response.type('text/plain');
    response.send('About Rhody Travel');
});

app.use(function(err, request, response, next){
	// output the error message
	console.error(err.stack);

	// tell the browser that the data is in plaintext
    response.type('text/plain');

	// tell the browser that there was an internal server error
    response.status(500);
	
	// write there was an internal server error to body of the page
    response.send('Internal Server Error');
});

app.listen(PORT, function(){
    console.log('Server started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});
