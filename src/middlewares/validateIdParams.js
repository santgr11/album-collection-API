const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().integer().required()
  });

  const { error } = schema.validate(req.params);

  if (error) {
    return res.status(400).send({ error: `invalid params: ${error}` });
  }

  return next();
};
