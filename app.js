const express = require("express");

const app = express();

app.use('/',(req,res)=>{
    res.send("Test")
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})