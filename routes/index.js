const Region = require('./region/region');
/*const City = require('./city/City');
const Country = require('./country/Country');*/


const getRoutes = (app) => {
	app.use('/region',Region);
} 
module.exports = getRoutes;