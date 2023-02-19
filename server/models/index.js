const Sequelize = require("sequelize");
const { config } = require("../config/db");

// console.log('config: ', config);

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    port: config.port,
    host: config.host,
    dialect: config.dialect,
    pool: config.pool,
    operatorsAliases: 0,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Blog = require("./blog.model.js")(sequelize, Sequelize);

module.exports = db;
