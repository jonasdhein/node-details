const http = require('http');

const port = 5000;

//arrow funcion em ação
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello node \n');
});

server.listen(port, () => {
    console.log(`Server OK`)
});