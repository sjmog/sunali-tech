const http = require('http');
const fs   = require('fs');

const serveData = (request, response) => {
  fs.readFile('data/data.json', function(err, data) {
    response.writeHead(200, {'Content-Type': 'json'});
    response.write(data);
    response.end();
  });
};

const server = http.createServer(serveData);

server.listen(3000, (err) => {
  if(err) {
    return console.log("Uh oh! Something went wrong:", err);
  };

  console.log('We are go on port 3000!')
});