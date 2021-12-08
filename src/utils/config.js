require('dotenv').config();

const DB_CONFIG = {
  PORT: process.env.DB_PORT,
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  HOST: process.env.DB_HOST,
  PASSWORD: process.env.DB_PASSWORD
};

const APP_CONFIG = {
  PORT: process.env.APP_PORT
};

module.exports = {
  DB_CONFIG,
  APP_CONFIG,
};
