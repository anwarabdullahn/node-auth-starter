const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		first_name: {
			type: String,
			required: true
		},
		last_name: {
			type: String
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		phone: {
			type: String
		},
		pin: {
			type: Number,
			default: null
		},
		avatar: {
			type: String,
			default: null
		},
		deletedAt: {
			type: Date,
			default: null
		}
	},
	{ timestamps: true }
);

module.exports = User = mongoose.model('users', UserSchema);
