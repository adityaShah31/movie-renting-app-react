const jsonServer = require('json-server');
const server = jsonServer.create();

const express = require('express');

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 3000;

server.use('/api', middlewares, router);
server.use(express.static('build'));

server.listen(PORT, () => console.log(`json-server is listening on Port: ${PORT}`));
