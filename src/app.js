const express = require('express');

//instance of an express js application
//creating server
const app = express();

//once is created, it needs to listen to a port
// app.listen(3000);
//above lines at 1, 5 and 9 created a server 

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

//this function is a request handler
// app.use((req, res) => {
//     res.send('<h1>Hello World</h1>');
// });
//below code means server is listening at port 3000 but it will only respond when the route is home.
// app.use("/", (req, res) => {
//     res.send('<h1>Welcome to Home</h1>');
// });
// app.use("/home/12", (req, res) => {
//     res.send('<h1>Welcome to Home 12</h1>');
// });
// app.use("/home", (req, res) => {
//     res.send('<h1>Welcome to Home Page 1</h1>');
// });

// app.use("/test", (req, res) => {
//     res.send('<h1>Welcome to Test Page</h1>');
// });
app.get("/get-home",[(req,res,next)=>{
   console.log("response from first handler");
   next();
  
},(req,res,next)=>{
    console.log("response from second handler");
    res.send("hi from today...")
}])
// app.post("/get-home",(req,res)=>{
//     res.send("This is from post http method");
//     console.log(req.query);
// })