const jsonServer = require('json-server');
const server = jsonServer.create();

const express = require('express');
const path = require('path');

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

server.use('/api', middlewares, router);
server.use(express.static(path.join(__dirname, 'build')));

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handles any requests that don't match the ones above
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(PORT, () => console.log(`json-server is listening on Port: ${PORT}`));
