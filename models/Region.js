const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
	name : { type : String, require: true , index: { unique: true } },
	createAt: { type: Date },
	updateAt: { type: Date }
});


let Region = null;

try {
  Region = mongoose.model('Region', RegionSchema);
} catch (e) {                               
  Region = mongoose.model('Region');
}

module.exports =  Region;