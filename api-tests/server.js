const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Ian's backend application");
})

app.get("/",(req,res)=>{
    res.send("Hello, Ian!");
})


app.listen(3000,()=>{
    console.log("Listening");
});