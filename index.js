const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;


const uri = "mongodb+srv://<username>:<password>@cluster0.iy859.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res)=>{
    res.send("Running Server");
});

// user: tixgig
// pass: S2ljzKKPNF3tN64t

app.listen(port, ()=>{
    console.log("Running port", port);
});