const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send("Running Server");
});


app.listen(port, ()=>{
    console.log("Running port", port);
});