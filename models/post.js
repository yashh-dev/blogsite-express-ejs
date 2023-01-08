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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

