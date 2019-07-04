const Joi = require('joi');

module.exports = {
  regionSchema: Joi.object().keys({
    name: Joi.string().min(3).max(20).required(),
  })
};