require('dotenv').config(); 
const express = require('express'); 
const app = express();   
// set up cors here as such 
const cors = require('cors'); 

app.use(cors());   

//import routes 
const ExternalapiCall = require('./routes/ExternalAPI.js'); 

// set up middleware here as such 
app.use(express.json());    

const PORT = process.env.PORT;  

//call the routes here as such 
app.use('/api/', ExternalapiCall); 


//set up simple backend route here as such 
app.get('/', (req, res) => { 
    res.json({ 
        Server: "Backend Server is successfully running"
    }); 
});  

app.listen(PORT, () => { 
    console.log(`Server is successfully running on: http://localhost:${PORT}`); 
}); 


