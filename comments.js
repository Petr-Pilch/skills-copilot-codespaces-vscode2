// Create web server
// 1. Load the http module
var http = require('http');
// 2. Create a web server object
var server = http.createServer(function (request, response) {
	// 3. Write response head
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 4. Write response body
	response.end('Hello World\n');
});
// 5. Make server listen on port 8000
server.listen(8000);
console.log('Server running at http://