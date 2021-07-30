// knex-connector.js
const knex = require('knex');
const connectionData = require('./connection-string.json');

// knex connector
const connectedKnex = knex(connectionData);

module.exports = connectedKnex;
