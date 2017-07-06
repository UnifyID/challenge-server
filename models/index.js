const knex = require('knex');
const db = require('bookshelf')(knex);

module.exports = db;
