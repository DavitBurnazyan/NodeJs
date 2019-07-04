const Joi =  require('joi');
const Schema = require('./schema');

exports.Region = (req) => {
	const schemaResult = Schema.regionSchema;
	const result = Joi.validate(req.body, schemaResult);

	if(result.error !== null){
		return result.error;
	}else {
		return true;
	}
};
