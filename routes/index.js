const Region = require('./region/Region');
/*const City = require('./city/City');
const Country = require('./country/Country');*/


module.exports = (app) => {
	//app.use('/store',Region);
	app.use('/',(req,res) => {req.send('aaaaaaaaaaaaaaaaa')});
} 