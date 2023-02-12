require("dotenv/config");

const mysql = require("mysql");

const { DB_PORT, DB_HOST, DB_PASS, DB_USER, DB_TYPE, DB_NAME } = process.env || {};

const config = {
  port: DB_PORT,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  dialect: DB_TYPE,
  database: DB_NAME,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
};

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

module.exports = {
  db,
  config,
};
