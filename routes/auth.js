const User = require("../models/user");
const express = require("express");

const router = express.Router();

router.route("/signup").post(async (req, res) => {
	const { username, email, password } = req.body;
	console.log(req.body);
	try {
		const user = new User({ email, username });
		const registeredUser = await User.register(user, password);
		res.status(200).json({
			status: "success",
		});
	} catch (e) {
		console.log(e);
		res.status(400).json({
			status: "failed",
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