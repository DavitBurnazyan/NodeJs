const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



mongoose.connect(config.Db.url, {
  useNewUrlParser: true,
}).then(() => {
	console.log('Successfully connected to the database');
	app.listen(config.PORT, () => console.log(`PORT is ${config.PORT}`));
}).catch(() => {
	console.log('Could not connect to the database. Exiting now...');
	process.exit();
});


routes(app);

