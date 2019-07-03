const express = require('express');
const regionController = require('./region.controller');
const router = express.Router();

router.post('/store',regionController.store);

// app.get();
// app.put();
// app.delete();


/*
	HTTP Verb     Operation
	GET           Read
	POST          Create
	PUT           Update
	DELETE        Delete
*/