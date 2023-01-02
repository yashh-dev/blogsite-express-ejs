const User = require("../models/user");
const express = require("express");

const router = express.Router();

router.route("/signup").post(async (req, res) => {
	const { username, email, password } = req.body;
	console.log(req.body);
	const user = await User.create(req.body);
	res.send(req.body);
});

module.exports = router;