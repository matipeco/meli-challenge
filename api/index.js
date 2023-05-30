const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.json('Hola Mundo');
});

server.listen(3001, () => {
  console.log('Escuchando en el puerto 3001');
});
