const Joi = require('joi');

module.exports = async (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    title: Joi.string().required(),
    album: Joi.string().required(),
    artists: Joi.array().items(Joi.object({ name: Joi.string() })),
    duration: Joi.number().integer(),
    discNumber: Joi.number().integer(),
    trackNumber: Joi.number().integer()
  }).required();

  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).send({ error: `invalid body: ${error.message}` });
  }

  return next();
};
