const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// defines structure of a document
const workoutSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		sets: {
			type: Number,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

// model uses schema to interact with db
module.exports = mongoose.model('Workout', workoutSchema);
