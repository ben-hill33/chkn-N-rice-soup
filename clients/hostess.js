'use strict';

// require('dotenv').config();
// const io = require('socket.io-client');
// const host = process.env.HOST;
// const socket = io('http://localhost:3000');
require('dotenv').config();
const socket = require('socket.io-client');
const host = process.env.HOST;
const hubConnection = socket.connect(host);
const faker = require('faker');

setInterval(() => {
  let payload = {
    partyName: faker.name.lastName(),
    partySize: Math.floor(Math.random() * 6),
  };
  hubConnection.emit('arrival', payload);
}, 5000);



