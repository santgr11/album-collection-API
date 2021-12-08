const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instace');
const Artist = require('./artist.model');

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
      type: DataTypes.INTEGER,
      field: 'disc_number'
    },
    trackNumber: {
      type: DataTypes.INTEGER,
      field: 'disc_number'
    }
  },
  {
    timestamps: false
  }
);

Track.belongsToMany(Artist, { through: 'artist_tracks' });

module.exports = Track;
