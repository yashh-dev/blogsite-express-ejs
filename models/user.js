const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, "user must have a email"],
			unique: true,
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

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
