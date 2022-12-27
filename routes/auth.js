const User = require("../models/user");
const express = require("express");

const router = express.Router();

router.route('/signup')
.post((req,res)=>{
    const {username , email , password } = req.body;
    console.log(req.body);
    res.send(req.body);
})

module.exports = router;
