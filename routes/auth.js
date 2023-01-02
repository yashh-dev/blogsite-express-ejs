const User = require("../models/user");
const express = require("express");

const router = express.Router();

router.route("/signup").post(async (req, res) => {
	const { username, email, password } = req.body;
	console.log(req.body);
	try {
		const user = await User.create(req.body);
		user.save();
		res.status(200).json({
			status: "success",
		});
	} catch (e) {
		console.log(e);
		res.status(400).json({
			status: "failed",
			data: {
				message: e.code,
			},
		});
		return;
	}
});

router.route("/login").post(async (req, res) => {
	const { username, email, password } = req.body;
	console.log(req.body);
	const user = User.findOne({ username });
	if (user) {
		res.status(200).json({
			status: "success",
		});
	}
});

module.exports = router;