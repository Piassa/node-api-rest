const express  = require("express");
const mongoose = require("mongoose");

const app =  express();


mongoose.connect('mongodb://localhost:27017/api', { useUnifiedTopology: true, useNewUrlParser: true});


app.get('/', (req, res) => {
    res.send("Bora coda Alejandro!");
})

app.listen(3001);
