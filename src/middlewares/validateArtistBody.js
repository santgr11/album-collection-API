const Joi = require('joi');

module.exports = async (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    name: Joi.string().required()
  });

  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).send({ error: `invalid body: ${error.message}` });
  }

  return next();
};
