const Post = require("../models/post");
const express = require("express");

const router = express.Router();

router
	.route("/")
	.post(async (req, res) => {
		const post = Post.create(req.body);
		res.send(req.body).status(200);
	})
	.get(async (req, res) => {
		res.send("Test");
	});

router
	.route("/:id")
	.patch(async (req, res) => {
		console.log("hit");
		try {
			const post = await Post.findByIdAndUpdate(req.params.id, req.body);
			post.save();
			res.status(200).json({
				status: "Updated",
				data: req.body,
			});
		} catch {
			res.status(400).json({
				status: "Failed",
			});
		}
	})
	.delete(async (req, res) => {
		console.log("hit");
		try {
			const post = await Post.findByIdAndDelete(req.params.id);
			res.status(200).json({
				status: "Deleted",
				data: post,
			});
		} catch {
			res.status(400).json({
				status: "Failed to Delete",
			});
		}
	});

module.exports = router;
