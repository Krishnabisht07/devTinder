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
app.use("/home", (req, res) => {
    res.send('<h1>Welcome to Home Page 1</h1>');
});