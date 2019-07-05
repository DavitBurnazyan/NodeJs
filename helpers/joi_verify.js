const Joi =  require('joi');
const Schema = require('./schema');

exports.Model = (req,res) => {
	let schemaResult;


	if(req.method == "POST" && req.originalUrl == "/region/store"){
		schemaResult = Schema.regionSchema;
	}
	else if(req.method == "PUT" && req.originalUrl == "/region/"+req.params.id){
		schemaResult = Schema.regionUpdateSchema;
	}

	else if(req.method == "POST" && req.originalUrl == "/city/store"){
		schemaResult = Schema.citySchema;
	}
	else if(req.method == "PUT" && req.originalUrl == "/city/"+req.params.id){
		schemaResult = Schema.cityUpdateSchema;
	}

	else if(req.method == "POST" && req.originalUrl == "/country/store"){
		schemaResult = Schema.countrySchema;
	}
	else if(req.method == "PUT" && req.originalUrl == "/country/"+req.params.id){
		schemaResult = Schema.countryUpdateSchema;
	}

	else {
		return res.status(404).json({"info":"not found page"});
	}
	

	if(req.body.id === undefined){
		/*create validation*/
		result = Joi.validate(req.body, schemaResult);
	}else {
		/*update , get one .validation*/
		result = Joi.validate(req.body, schemaResult);
	}


	if(result.error !== null){
		return result.error;
	}else {
		return true;
	}
};
