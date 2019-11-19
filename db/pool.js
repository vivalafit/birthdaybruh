const mysql = require('mysql');
const util = require('util')
const config = require('../configs/config');
var pool;

const { Client } = require('pg');

const client = new Client({
  connectionString: config.db.HOST,
  ssl: false,
});

module.exports = client.connect();