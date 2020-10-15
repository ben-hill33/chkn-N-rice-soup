'use strict'

require('dotenv').config();
const faker = require('faker');
const socket = require('socket.io-client');
const host = process.env.HOST;
const hubConnection = socket.connect(host);


hubConnection.on('orderUp', order => {
  setTimeout(() => {
    orderReady(order)
  })
}, 8000)

function orderReady(order) {
  console.log(`Order is ready for ${payload.partyName}`)
}