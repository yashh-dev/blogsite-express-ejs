const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: String,
		author: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		blocks: [
			{
				image: {
					type: String,
				},
				content: String,
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
