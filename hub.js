'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log('connected');
  socket.on('arrival', payload => {
    logger('arrival', payload)
    socket.emit('arrival', payload);
  })
});

function logger(event, payload) {
  let date = new Date().toISOString();
  console.log('EVENT', { event, date, payload });
};





