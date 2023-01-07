const Post = require("../models/post");
const express = require("express");

const router = express.Router();

router
	.route("/")
	.post(async (req, res) => {
		const { title, author, blocks } = req.body;
		const Post = Post.create(title, author, blocks);
		res.send(req.body).status(200);
	})
	.get(async (req, res) => {
		res.send("Test");
	});

module.exports = router;
