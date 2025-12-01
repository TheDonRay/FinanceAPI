
require('dotenv').config(); 
const express = require('express'); 
const app = express();   
// set up cors here as such 
const cors = require('cors'); 

app.use(cors);  

// set up middleware here as such 
app.use(express.json());   

const PORT = process.env.PORT; 


//set up simple backend route here as such 
app.get('/', (req, res) => { 
    res.json({ 
        Server: "Backend Server is successfully running"
    }); 
}); 


