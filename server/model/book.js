const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	name: String,
	genre: String,
	authorId: {type: Schema.Types.ObjectId, ref: 'Author'}
});

bookSchema.virtual('id').get(function() {
	return this._id.toHexString();
});

bookSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Book', bookSchema);