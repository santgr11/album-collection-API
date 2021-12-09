const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instace');

const Artist = sequelize.define(
  'Artist',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
);

module.exports = Artist;
