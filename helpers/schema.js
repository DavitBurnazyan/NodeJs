const Joi = require('joi');

module.exports = {
	countrySchema: Joi.object().keys({
		name: Joi.string().min(3).max(20).required(),
		alpha2Code: Joi.string().required(),
		alpha3Code: Joi.string().required(),
		population: Joi.number(),
		latlng: [Joi.number(), Joi.number()],
		region: [Joi.string()],
		createAt: Joi.date(),
		updateAt: Joi.date()
	}),
	countryUpdateSchema: Joi.object().keys({
		id: Joi.string().required(),
		name: Joi.string().min(3).max(20).required(),
		alpha2Code: Joi.string().required(),
		alpha3Code: Joi.string().required(),
		population: Joi.number(),
		latlng: [Joi.number(), Joi.number()],
		region: [Joi.string()],
		createAt: Joi.date(),
		updateAt: Joi.date().required()
	}),
	regionSchema: Joi.object().keys({
		name: Joi.string().min(3).max(20).required(),
		createAt: Joi.date(),
	}),
	regionUpdateSchema: Joi.object().keys({
		id: Joi.string().required(),
		name: Joi.string().min(3).max(20).required(),
		createAt: Joi.date(),
		updateAt: Joi.date().required()
	}),

	citySchema: Joi.object().keys({
		name: Joi.string().min(3).max(20).required(),
		timezones: Joi.string(),
		isCapital: Joi.boolean(),
		country: Joi.string(),
		createAt: Joi.date(),
		updateAt: Joi.date() 
	}),
	cityUpdateSchema: Joi.object().keys({
		id: Joi.string().required(),
		name: Joi.string().min(3).max(20).required(),
		timezones: Joi.string(),
		isCapital: Joi.boolean(),
		country: Joi.string(),
		createAt: Joi.date(),
		updateAt: Joi.date().required()
	})
};

