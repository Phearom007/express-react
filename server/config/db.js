const mysql = require('mysql');

// const config = {
//   port: 5432,
//   host: 'localhost',
//   user: 'adminz',
//   password: '123123',
//   dialect: 'postgres',
//   database: 'node_project',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//     acquire: 30000,
//   }
// };

const config = {
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  dialect: 'mysql',
  database: 'node-project',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  }
};

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_project',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  }
});

module.exports = {
  db,
  config
};