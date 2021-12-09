const models = require('../db/models');

const addAlbum = async (newAlbum) => {
  try {
    const result = await models.Album.create(newAlbum);
    return result;
  } catch (err) {
    console.log(`Error adding album: ${err.message}`);
    throw err;
  }
};

const getAlbums = async () => {
  try {
    const result = await models.Album.findAll();
    return result;
  } catch (err) {
    console.log(`Error getting the albums: ${err.message}`);
    throw err;
  }
};

const getAlbumById = async (id) => {
  try {
    const result = await models.Album.findByPk(id,
      {
        include: [
          {
            model: models.Artist,
            as: 'artist'
          },
          {
            model: models.Track,
            as: 'track'
          }
        ]
      });
    return result;
  } catch (err) {
    console.log(`Error getting album with id ${id}: ${err.message}`);
    throw err;
  }
};

const getAlbumByTitle = async (title) => {
  try {
    const result = await models.Album.findOne({ title });
    return result;
  } catch (err) {
    console.log(`Error getting album with title ${title}: ${err.message}`);
    throw err;
  }
};

const removeAlbum = async (id) => {
  try {
    await models.Album.destroy({
      where: {
        id
      }
    });
  } catch (err) {
    console.log(`Error removing album with id ${id}`);
    throw err;
  }
};

module.exports = {
  addAlbum,
  getAlbumById,
  getAlbumByTitle,
  getAlbums,
  removeAlbum
};
