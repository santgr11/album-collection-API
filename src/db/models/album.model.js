const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-instace');
const Artist = require('./artist.model');
const Track = require('./track.model');

const Album = sequelize.define(
  'Album',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATE,
      field: 'release_date'
    },
  },
  {
    timestamps: false
  }
);

Album.belongsToMany(Artist, { through: 'album_artists' });
Album.hasMany(Track);

module.exports = Album;
