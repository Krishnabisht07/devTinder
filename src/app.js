const express = require("express");
const app = express();


app.use("/getUserData",(req, res)=>{
   throw new Error("Something went wrong!");
})

app.use("/",(err, req, res, next)=>{

    res.status(500).send("Internal Server Error");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});