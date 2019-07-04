const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
	name: { type: String, required: true, index: { unique: true} },
	timezones: { type: Array },
	isCapital: { type: Boolean },
	country: [],
	createAt: { type: Date },
	updateAt: { type: Date }
});

let City = null;

try {
  City = mongoose.model('Cities', CitiesSchema);
} catch (e) {                               
  City = mongoose.model('Cities');
}

module.exports = City;