const albumsRouter = require('./albums');
const artistsRouter = require('./artists');
const tracksRouter = require('./tracks');
const pingRouter = require('./ping');

module.exports = {
  albumsRouter,
  artistsRouter,
  tracksRouter,
  pingRouter
};
