/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { artistsController } = require('../controller');
const { validateArtistBody, validateArtistParams } = require('../middlewares');

router.get(
  '/:id',
  validateArtistParams,
  artistsController.getArtist
);

router.get('/', artistsController.getArtists);

router.post(
  '/',
  validateArtistBody,
  artistsController.addArtist
);

router.put(
  '/:id',
  validateArtistParams,
  validateArtistBody,
  artistsController.updateArtist
);

module.exports = router;
