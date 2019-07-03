const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountriesSchema = new Schema((Region) => {
	name: { type: String, required: true, index:{ unique: true} },
	alpha2Code: { type: String, required: true, index: { unique: true}}	,
	alpha3Code: { type: String, required: true, index: { unique: true}},
	population: { type: Number },
	latlng: { type: Array },
	region: []
});
	let Country = null;
try {
  Country = mongoose.model('Country', CountriesSchema);
} catch (e) {                               
  Country = mongoose.model('Country');
}

module.exports = Country;