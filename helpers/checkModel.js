 const Region = require('../models/Region');
 const City = require('../models/City');
 const Country = require('../models/Country');

exports.model = {
    formHandler: function(req,res){

    	if(req.originalUrl.indexOf("/region") != -1){
    		return  {
    			"model" : Region
    		}
    	}else if(req.originalUrl.indexOf("/country") != -1){
    		return {
    			"model" : Country
    		}
    	}else if(req.originalUrl.indexOf("/city") != -1){
    		return {
    			"model" : City
    		}
    	}else {
            return res.status(404).json({"info": "not found page"});
    	}
    }
}

// req.get('host')
// req.protocol


