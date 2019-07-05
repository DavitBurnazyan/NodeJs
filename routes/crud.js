const express = require('express');
const crudController = require('../controllers/crud.controller');
const router = express.Router();

router.get('/',crudController.get);
router.get('/:id',crudController.getOne);
router.post('/store',crudController.store);
router.put('/:id',crudController.update);
router.delete('/:id',crudController.remove);



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