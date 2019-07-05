const checkModel = require('../helpers/checkModel');
const modelWithJoi = require('../helpers/joi_verify');

module.exports = { 	
	get: (req, res) => {
		const getInfo = checkModel.model.get(req,res);
		const Model = getInfo.model;

		Model.find().then((data) => {
			res.status(201).json({data});
		}).catch((err) => {
			res.status(503).json({err});
		})
	},
	store: (req, res) => {
		let getInfo = checkModel.model.get(req,res);
		const Model = getInfo.model;
		
		const result = modelWithJoi.Model(req, res);
	    if (result !== true) {	
	    	return res.status(503).json({result})
	  	}
	  	const request = req.body;
		const NewModel = new Model(request);
		
		NewModel.save().then(data => {
			res.status(201).json({data})
		}).catch((err) => {
			res.status(503).json({err});
		})
	},
	getOne: (req, res) => {
		const getInfo = checkModel.model.get(req,res);
		const Model = getInfo.model;

		Model.findById(req.params.id).then((region) => {
			res.status(201).json({region});
		}).catch((err) => {
			res.status(503).json({err})
		})
	},
	remove: (req,res) => {
		const getInfo = checkModel.model.get(req,res);
		const Model = getInfo.model;

		Model.findByIdAndDelete(req.body.id).then((data) => {
			if (data !== null) {
				res.status(201).json({ "Info" : 'Done' });
	      	}else {
	        	res.status(503).json({ "Info" : 'Region not exist' });
	      	}
		}).catch((err) => {
			res.status(503).json({err});
		})
	},
	update: (req, res) => {
		const getInfo = checkModel.model.get(req,res);
		const Model = getInfo.model;
		const result = modelWithJoi.Model(req, res);
	    if (result !== true) {	
	    	return res.status(503).json({result})
	  	}
	  	const request = req.body;

		Model.findByIdAndUpdate(req.body.id, request , {
			new: true,
		}).then((item) => {
			if (!item) {
				return res.status(503).json({'info': 'Region not exist'});
			}
			res.status(201).json({item})
		}).catch((err) => {
			res.status(503).json({err})
		})
	}
}



