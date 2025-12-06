const express = require("express");
const getUserdata = express.Router();

getUserdata.get("/:stock", (req, res) => {
    const stock = req.params.stock;  
    if (stock == 'BTC'){ 
        console.log("Not a valid stock that is a bitcoin based stock"); 
    }
});
