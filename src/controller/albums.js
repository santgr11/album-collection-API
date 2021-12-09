const {
  albumsRepository,
  artistsRepository,
  tracksRepository
} = require('../repository');

const getAlbum = async (req, res) => {
  const { id } = req.params;

  const result = await albumsRepository.getAlbumById(id);

  if (!result) {
    return res.status(404).send({ error: `Album with id ${id} not found` });
  }

  return res.status(200).send(result);
};

const getAlbums = async (req, res) => {
  const result = await albumsRepository.getAlbums();

  return res.status(200).send(result);
};

const addAlbum = async (req, res) => {
  const newAlbum = req.body;

  const createdAlbum = await albumsRepository.addAlbum(newAlbum);

  newAlbum.artists.forEach(async (artist) => {
    let existingArtist = await artistsRepository.getArtistByName(artist.name);
    if (!existingArtist) {
      existingArtist = await artistsRepository.addArtist(artist.name);
    }

    await createdAlbum.addArtist(existingArtist);
  });

  newAlbum.tracks.forEach(async (track) => {
    const searchTrack = await tracksRepository.getTrackByTitle(track.title);
    if (!searchTrack) {
      track.albumId = createdAlbum.id;
      await tracksRepository.addTrack(track);
    }
  });

  const result = await albumsRepository.getAlbumById(createdAlbum.id);

  return res.status(200).send(result);
};

const removeAlbum = async (req, res) => {
  const { id } = req.params;

  await albumsRepository.removeAlbum(id);

  return res.status(200).send({ message: `Album with id ${id} removed` });
};

module.exports = {
  addAlbum,
  getAlbum,
  getAlbums,
  removeAlbum
};
