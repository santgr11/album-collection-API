const { artistsRepository } = require('../repository');

const addArtist = async (req, res) => {
  const { name } = req.body;
  const result = await artistsRepository.addArtist(name);

  return res.status(200).send(result);
};

const getArtist = async (req, res) => {
  const { id } = req.params;

  const result = await artistsRepository.getArtistById(id);

  if (!result) {
    return res.status(404).send({ error: `Artist with id ${id} not found` });
  }

  return res.status(200).send(result);
};

const getArtists = async (req, res) => {
  const result = await artistsRepository.getArtists();

  return res.status(200).send(result);
};

const updateArtist = async (req, res) => {
  const { id } = req.params;
  const updatedArtist = req.body;

  const artistToUpdate = await artistsRepository.getArtistById(id);

  if (!artistToUpdate) {
    return res.status(404).send({ error: `Artist with id ${id} not found` });
  }

  const result = await artistsRepository.updateArtist(artistToUpdate, updatedArtist);

  return res.status(200).send(result);
};

module.exports = {
  addArtist,
  getArtist,
  getArtists,
  updateArtist
};
