const router = require('express').Router();
const { artistsController } = require('../controller');
const { validateArtistBody, validateIdParams } = require('../middlewares');

router.get(
  '/:id',
  validateIdParams,
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
  validateIdParams,
  validateArtistBody,
  artistsController.updateArtist
);

module.exports = router;
