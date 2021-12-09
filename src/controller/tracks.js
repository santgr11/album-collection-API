const { tracksRepository, artistsRepository, albumsRepository } = require('../repository');

const addTrack = async (req, res) => {
  const newTrack = req.body;

  const existingAlbum = await albumsRepository.getAlbumByTitle(newTrack.album);

  if (!existingAlbum) {
    return res.status(400).send({ error: `Invalid album name: ${newTrack.album}` });
  }

  newTrack.albumId = existingAlbum.id;

  const createdTrack = await tracksRepository.addTrack(newTrack);

  newTrack.artists.forEach(async (artist) => {
    let existingArtist = await artistsRepository.getArtistByName(artist.name);
    if(!existingArtist) {
      existingArtist = await artistsRepository.addArtist(artist.name);
    }

    await createdTrack.addArtist(existingArtist);
  });

  await createdTrack.reload();

  return res.status(200).send(createdTrack);
};

const getTracks = async (req, res) => {
  const result = await tracksRepository.getTracks();

  return res.status(200).send(result);
};

const getTrack = async (req, res) => {
  const { id } = req.params;

  const result = await tracksRepository.getTrackById(id);

  if (!result) {
    return res.status(404).send({ error: `Track with id ${id} not found` });
  }

  return res.status(200).send(result);
};

const updateTrack = async (req, res) => {
  const { id } = req.params;
  const updatedTrack = req.body;

  const trackToUpdate = await tracksRepository.getTrackById(id);

  if (!trackToUpdate) {
    return res.status(404).send({ error: `Track with id ${id} not found` });
  }

  const albumsTrack = await albumsRepository.getAlbumByTitle(updatedTrack.album);

  if (!albumsTrack) {
    return res.status(400).send({ error: `Invalid album name ${updatedTrack.album}` });
  }

  trackToUpdate.albumId = albumsTrack.id;

  const result = await tracksRepository.updateTrack(trackToUpdate, updatedTrack);

  return res.status(200).send(result);
};

const removeTrack = async (req, res) => {
  const { id } = req.params;

  await tracksRepository.removeTrack(id);

  return res.status(200).send({ message: `Track with id ${id} removed` });
};

module.exports = {
  addTrack,
  getTrack,
  getTracks,
  updateTrack,
  removeTrack
};
