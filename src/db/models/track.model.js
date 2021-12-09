const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instace');

const Track = sequelize.define(
  'Track',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER
    },
    discNumber: {
      type: DataTypes.INTEGER
    },
    trackNumber: {
      type: DataTypes.INTEGER
    }
  }
);

module.exports = Track;
