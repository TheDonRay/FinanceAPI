const express = require('express'); 
const apicall = express.Router(); 

//for this route I will be using the yahoo finance api call  
//TODO set this route as an async route 
apicall.get('/stockdata', (req, res) => { 
    res.send('This route will retrieve stock data using yahoo finance api call.');
}); 

module.exports = apicall; 