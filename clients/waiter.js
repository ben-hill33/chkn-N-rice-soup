'use strict';

// const io = require("socket.io-client");
// const socket = io('http://localhost:3000');
require('dotenv').config();
const faker = require('faker');
const socket = require('socket.io-client');
const host = process.env.HOST;
const hubConnection = socket.connect(host);


hubConnection.on('arrival', payload => {

  setTimeout(() => {
    arrival(payload);
  }, 1000);
})

function arrival(payload) {
  console.log(`
  Your party
  ${payload.partyName} of ${payload.partySize} has been sat`);
}


setInterval(() => {
  let order = {
    partyFood: faker.image.food()
  }
  hubConnection.emit('orderUp', order)
}, 7000);

