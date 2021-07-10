const jsonServer = require('json-server');
const server = jsonServer.create();

const express = require('express');
const path = require('path');

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 3000;

server.use('/api', middlewares, router);
server.use(express.static(path.join(__dirname, 'build')));

server.listen(PORT, () => console.log(`json-server is listening on Port: ${PORT}`));
