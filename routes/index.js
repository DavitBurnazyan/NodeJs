const crudRoute = require('./crud');

const getRoutes = (app) => {
	app.use('/region',crudRoute);
	app.use('/city',crudRoute);
	app.use('/country',crudRoute);
} 

module.exports = getRoutes;