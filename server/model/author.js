const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
	name: String,
	age: Number,
});

authorSchema.virtual('id').get(function() {
	return this._id.toHexString();
});

authorSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Author', authorSchema);