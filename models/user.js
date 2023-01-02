const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
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
		followers: Number,
		description: String,
		posts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Post",
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;