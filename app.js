const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const checkModel = require('./helpers/checkModel');
const env = dotenv.config();
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(env.parsed.DB_URL, {
  useNewUrlParser: true,
}).then(() => {
	console.log('Successfully connected to the database');
	app.listen(env.parsed.PORT, () => console.log(`PORT is ${env.parsed.PORT}`));
}).catch(() => {
	console.log('Could not connect to the database. Exiting now...');
	process.exit();
});

routes(app);




