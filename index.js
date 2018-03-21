const http = require('http');

const serveData = (request, response) => {
  console.log('serving data');
};

const server = http.createServer(serveData);

server.listen(3000, (err) => {
  if(err) {
    return console.log("Uh oh! Something went wrong:", err);
  };

  console.log('We are go on port 3000!')
});