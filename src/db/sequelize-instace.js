const { Sequelize } = require('sequelize');
const { DB_CONFIG } = require('../utils/config');

const sequelize = new Sequelize(
  DB_CONFIG.NAME,
  DB_CONFIG.USER,
  DB_CONFIG.PASSWORD,
  {
    host: DB_CONFIG.HOST,
    dialect: 'mysql',
    port: DB_CONFIG.PORT,
    define: {
      underscored: true,
      timestamps: false
    }
  }
);

module.exports = sequelize;
