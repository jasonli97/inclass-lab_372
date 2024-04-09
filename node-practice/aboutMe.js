var http = require('http');

var port = 1337;

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html' 
    });

    response.write("<h2>Hi my name is Jason!</h2>\n");
    response.write("I am a student at URI.\n");
    response.write("A favorite show that I watch is\n ");

    response.end();

}).listen(port);

console.log(`Listening ... Go to http://localHost:`+ port);
