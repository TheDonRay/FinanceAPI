const express = require("express");
const getUserdata = express.Router();


getUserdata.post("/:value", (req, res) => {
    const value = req.params.value;  
    if (value > 1000){  
        console.log('Value recieved in the backend'); 
        console.log('you have good money'); 
    } 
    res.send(value); 
}); 

module.exports = getUserdata; 
