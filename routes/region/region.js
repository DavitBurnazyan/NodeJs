const express = require('express');
const regionController = require('./region.controller');
const router = express.Router();

router.get('/',regionController.get);
router.get('/:id',regionController.getOne);
router.post('/store',regionController.store);
router.put('/:id',regionController.update);
router.delete('/:id',regionController.delete);


/*
	Verb	URI	Action	Route Name
	GET	 			/photos	index			photos.index
	GET	 			/photos/create			create	photos.create
	POST 			/photos					store	photos.store
	GET	 			/photos/{photo}			show	photos.show
	GET	 			/photos/{photo}/edit	edit	photos.edit
	PUT  /PATCH		/photos/{photo}			update	photos.update
	DELETE			/photos/{photo}			destroy	photos.destroy
*/

module.exports = router;