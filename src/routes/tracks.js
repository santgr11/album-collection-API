const router = require('express').Router();
const { tracksController } = require('../controller');
const {
  validateIdParams,
  validateTrackBody
} = require('../middlewares');

router.get(
  '/:id',
  validateIdParams,
  tracksController.getTrack
);

router.get(
  '/',
  tracksController.getTracks
);

router.post(
  '/',
  validateTrackBody,
  tracksController.addTrack
);

router.put(
  '/:id',
  validateIdParams,
  validateTrackBody,
  tracksController.updateTrack
);

router.delete(
  '/:id',
  validateIdParams,
  tracksController.removeTrack
);

module.exports = router;
