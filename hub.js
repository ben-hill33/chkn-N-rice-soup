'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

io.on('connection', socket => {
  console.log('connected');

  socket.on('arrival', payload => {
    logger('arrival', payload)
    io.emit('arrival', payload);
  })

  socket.on('orderUp', order => {
    logger('orderUp', order)
    // io.emit('orderUp', order)
    console.log('The party has ordered', order)
  })
});

function logger(event, payload) {
  let date = new Date().toISOString();
  console.log('EVENT', { event, date, payload });
};






