const express = require("express");
const app = express();
const mongoose = require("mongoose");


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

app.get('/',(req,res)=>{
    res.send("Home")
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})