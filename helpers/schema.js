const Joi = require('joi');

module.exports = {
	regionSchema: Joi.object().keys({
		name: Joi.string().min(3).max(20).required(),
	}),
	regionUpdateSchema: Joi.object().keys({
		id: Joi.string().required(),
		name: Joi.string().min(3).max(20).required(),
	})
};

