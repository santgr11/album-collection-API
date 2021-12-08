/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { artistsController } = require('../controller');

router.get('/:id', artistsController.getArtist);

router.get('/', artistsController.getArtists);

router.post('/', artistsController.addArtist);

router.put('/:id', artistsController.updateArtist);

module.exports = router;
