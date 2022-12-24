const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		userName: {
			type: String,
			required: [true, "user must have a username"],
		},
		email: {
			type: String,
			required: [true, "user must have a email"],
		},
		password: {
			type: String,
			required: [true, "user must have a password"],
		},
	},
	{ timestamps: true }
);

module.exports = User;