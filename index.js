const express = require('express');     // import express  
const app = express();                  // creating Express app

app.get('/', (req, res) => {            // forward slash refers to the route, with req as incoming object
    res.send({ a: "s" });          // and res as outgoing response
});

const PORT = process.env.PORT || 5000;  // look in the underlying environment to see for established ports, or use 5000
app.listen(PORT);                       // instructs express to tell node that it wants to listen to incoming traffic from PORT
