'use strict';

// require('dotenv').config();
// const io = require('socket.io-client');
// const host = process.env.HOST;
// const socket = io(host);

const socket = require('socket.io-client')('http://localhost:3000');
// const host = process.env.HOST;
// const io = socket.connect('http://localhost:3000');

setInterval(() => {
  let payload = {
    message: 'hello world'
  };
  socket.emit('test', payload);
}, 1000);


