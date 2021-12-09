const {
  Artist,
  Track,
  Album
} = require('./models');

Album.hasMany(Track, { as: 'track', foreignKey: 'albumId' });
Track.belongsTo(Album, {
  foreignKey: 'albumId',
  as: 'album'
});

Artist.belongsToMany(Track, { through: 'artist_tracks', as: 'track' });
Track.belongsToMany(Artist, { through: 'artist_tracks', as: 'artist' });

Album.belongsToMany(Artist, { through: 'album_artists', as: 'artist' });
Artist.belongsToMany(Album, { through: 'album_artists', as: 'album' });
