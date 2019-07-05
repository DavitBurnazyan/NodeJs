const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
	name: { type: String, required: true, index: { unique: true} },
	timezones: { type: Number },
	isCapital: { type: Boolean },
	country: { type: String },
	createAt: { type: Date },
	updateAt: { type: Date, default: null }
});

let City = null;

try {
  City = mongoose.model('Cities', CitiesSchema);
} catch (e) {                               
  City = mongoose.model('Cities');
}

module.exports = City;