const models = require('../db/models');

const addArtist = async (name) => {
  try {
    const result = await models.Artist.create({
      name
    });

    return result;
  } catch (err) {
    console.log(`Error adding artist: ${err.message}`);
    throw err;
  }
};

const getArtistById = async (id) => {
  try {
    const result = await models.Artist.findByPk(id);

    return result;
  } catch (err) {
    console.log(`Error getting artist with id ${id}: ${err.message}`);
  }
};

const getArtists = async () => {
  try {
    const result = await models.Artist.findAll();

    return result;
  } catch (err) {
    console.log(`Error getting artists: ${err.message}`);
    throw err;
  }
};

const getArtistByName = async (name) => {
  try {
    const result = await models.Artist.findOne({ name });
    return result;
  } catch (err) {
    console.log(`Error getting artist with name ${name}: ${err.message}`);
  }
};

const updateArtist = async (artistToUpdate, updatedArtist) => {
  artistToUpdate.name = updatedArtist.name;
  try {
    await artistToUpdate.save();
    return artistToUpdate;
  } catch (err) {
    console.log(`Error updating artist: ${err.message}`);
  }
};

module.exports = {
  addArtist,
  getArtistById,
  getArtistByName,
  getArtists,
  updateArtist
};
