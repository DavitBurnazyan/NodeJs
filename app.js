const express = require('express');
const config = require('./config');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const app = express();

routes(app);

mongoose.connect(config.Db.url, {
  useNewUrlParser: true,
}).then(() => {
	console.log('Successfully connected to the database');
	app.listen(config.PORT, () => console.log(`PORT is ${config.PORT}`));
}).catch(() => {
	console.log('Could not connect to the database. Exiting now...');
	process.exit();
});




