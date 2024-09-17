const express = require ("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());
// all frontends wud be able to send request here
// app.use(cors(
//  domain:"https://google.com")) -> here we can restrict the frontend req.

app.post("/sum",function(req,res){
    const a = parseInt(req.body.a ); 
    const b = parseInt(req.body.b) ;
    
    res.json({
        answer:a+b,
    })
});

app.listen(5000);
