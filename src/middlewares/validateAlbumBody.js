const Joi = require('joi');
const moment = require('moment');

module.exports = async (req, res, next) => {
  const { body } = req;

  if (body.releaseDate) {
    body.releaseDate = moment(body.releaseDate, 'DD-MM-YYYY').toDate();
  }

  const schema = Joi.object({
    title: Joi.string().required(),
    artists: Joi.array().items(Joi.object({
      name: Joi.string()
    })).required(),
    releaseDate: Joi.date(),
    tracks: Joi.array().items(Joi.object({
      title: Joi.string()
    })).required(),
    type: Joi.string().valid('album', 'single', 'compilation')
  });

  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).send({ error: `invalid body: ${error.message}` });
  }

  return next();
};
