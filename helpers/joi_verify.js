const Joi =  require('joi');
const Schema = require('./schema');

exports.Region = (req) => {
	if(req.body.id === undefined){
		/*create validation*/
		schemaResult = Schema.regionSchema;
		result = Joi.validate(req.body, schemaResult);
	}else {
		/*
			update , get one .validation
		*/
		schemaResult = Schema.regionUpdateSchema;
		result = Joi.validate(req.body, schemaResult);
	}

		console.log(result);
	if(result.error !== null){
		return result.error;
	}else {
		return true;
	}
};
