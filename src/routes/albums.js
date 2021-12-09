const router = require('express').Router();
const { albumsController } = require('../controller');
const {
  validateIdParams,
  validateAlbumBody
} = require('../middlewares');

router.get(
  '/',
  albumsController.getAlbums
);

router.get(
  '/:id',
  validateIdParams,
  albumsController.getAlbum
);

router.post(
  '/',
  validateAlbumBody,
  albumsController.addAlbum
);

router.delete(
  '/:id',
  validateIdParams,
  albumsController.removeAlbum
);

module.exports = router;
