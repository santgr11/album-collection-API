const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instace');

const Artist = sequelize.define(
  'Artist',
  {
    name: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  },
);

module.exports = Artist;
