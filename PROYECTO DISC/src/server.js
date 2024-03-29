const express = require('express');
const homeRouter = require('./routes/homeRouter');
const discRouter = require('./routes/discRouter');
const server = express();

server.use("/", homeRouter);
server.use("/disc",discRouter);

module.exports= server;