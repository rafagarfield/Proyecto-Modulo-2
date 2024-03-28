const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const episodeRouter = require('./routes/episodeRouter');
const server= express();


// MIDDLEWARES
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());



// RUTAS
server.use("/",homeRouter);
server.use("/user",userRouter);
server.use("/episode",episodeRouter);


 


module.exports= server;


