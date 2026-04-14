const express = require('express');

//instance of an express js application
//creating server
const app = express();


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// app.get("/get-home",[(req,res,next)=>{
//    console.log("response from first handler");
//    next();
  
// },(req,res,next)=>{
//     console.log("response from second handler");
//     res.send("hi from today...")
// }])

// Another way of creating routes in express js
app.get("/get-home",(req,res,next)=>{
   console.log("response from first handler");
   next();
  
});
app.get("/get-home", (req, res, next) => {
    console.log("response from second handler");
    res.send("hi from today...")
})