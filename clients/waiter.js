'use strict';

// const io = require("socket.io-client");
// const socket = io('http://localhost:3000');
require('dotenv').config();
const socket = require('socket.io-client');
const host = process.env.HOST;
const hubConnection = socket.connect(host);

hubConnection.on('seated', (payload) => {
  setTimeout(() => {
    arrival(payload);
  }, 1000);
})

function arrival(payload){
  console.log(`Your ${payload.partyName} of ${payload.partySize} has been sat`); 
}

