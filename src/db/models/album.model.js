const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instace');

const Album = sequelize.define(
  'Album',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      field: 'release_date'
    },
    type: {
      type: DataTypes.STRING
    }
  }
);

module.exports = Album;
