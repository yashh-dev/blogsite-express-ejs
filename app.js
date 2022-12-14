const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set({strictQuery:true})
mongoose.connect("mongodb://localhost:27017/blogsite"
).then(()=>{
    console.log("Succesfull Connected to Database");
}).catch((e)=>{
    console.log("Problem with mongoose");
    console.log(e);
})

app.get('/',(req,res)=>{
    res.send("Home")
})



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})