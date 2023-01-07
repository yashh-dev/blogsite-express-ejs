const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
//MONGO CONNECTION
const connectRetry = function () {
	mongoose.set({ strictQuery: true });
	mongoose
		.connect("mongodb://localhost:27017/blogsite")
		.then(() => {
			console.log("Succesfull Connected to Database");
		})
		.catch((e) => {
			console.log("Problem with mongoose");
			console.log(e);
			setTimeout(connectRetry, 1000);
		});
};
connectRetry();

//MIDDLEWARE
app.use(express.json());
app.use(
	session({
		name: "sess",
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			// secure : true,
			expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTER
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

app.get("/", (req, res) => {
	req.session.user = null;
	console.log(req.session);
	res.send("Home");
});

app.use("/api/v1/user", authRouter);
app.use("/api/v1/post", postRouter);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})