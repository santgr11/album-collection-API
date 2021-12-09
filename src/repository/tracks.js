const models = require('../db/models');

const addTrack = async (newTrack) => {
  try {
    const result = await models.Track.create(newTrack);
    return result;
  } catch (err) {
    console.log(`Error adding track: ${err.message}`);
    throw err;
  }
};

const getTrackById = async (id) => {
  try {
    const result = await models.Track.findByPk(id);
    return result;
  } catch (err) {
    console.log(`Error getting track with id ${id}: ${err.message}`);
    throw err;
  }
};

const getTrackByTitle = async (title) => {
  try {
    const result = await models.Track.findOne({ title });
    return result;
  } catch (err) {
    console.log(`Error getting track with title ${title}: ${err.message}`);
    throw err;
  }
};

const getTracks = async () => {
  try {
    const result = await models.Track.findAll();
    return result;
  } catch (err) {
    console.log(`Error getting the tracks: ${err.message}`);
    throw err;
  }
};

const updateTrack = async (trackToUpdate, updatedTrack) => {
  const fieldsToUpdate = Object.keys(updatedTrack);

  fieldsToUpdate.forEach(field => {
    trackToUpdate[field] = updatedTrack[field];
  });

  try {
    const result = await trackToUpdate.save();
    return result;
  } catch (err) {
    console.log(`Error updating track with id ${trackToUpdate.id}: ${err.message}`);
    throw err;
  }
};

const removeTrack = async (id) => {
  try {
    await models.Track.destroy({
      where: {
        id
      }
    });
  } catch (err) {
    console.log(`Error removing track with id ${id}`);
  }
};

module.exports = {
  addTrack,
  getTrackById,
  getTrackByTitle,
  getTracks,
  updateTrack,
  removeTrack
};
