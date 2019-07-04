const Region = require('../../models/Region');
const regionWithJoi = require('../../helpers/joi_verify');


exports.get = (req, res) => {
	Region.find().then((regions) => {
		res.status(201).json({regions});
	}).catch((err) => {
		res.status(503).json({err});
	});

};

exports.store = (req, res) => {
	const result = regionWithJoi.Region(req, res);
    if (result !== true) {	
    	return res.status(503).json({result})
  	}

	const NewRegion = new Region({
		name : req.body.name
	})
	NewRegion.save().then(region => {
		res.status(201).json({region})
	}).catch((err) => {
		res.status(503).json({err});
	})
};


exports.delete = (req,res) => {
	Region.findByIdAndDelete(req.body.id).then((data) => {
		if (data !== null) {
			res.status(201).json({ "Info" : 'Done' });
      	}else {
        	res.status(503).json({ "Info" : 'Region not exist' });
      	}
	}).catch((err) => {
		res.status(503).json({err});
	});
}