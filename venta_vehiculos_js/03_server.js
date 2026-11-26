const http = require('http');

const servidor = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Bienvenido a la concesionaria</h1>');
});

servidor.listen(3000);
console.log('Servidor en http://localhost:3000');
