const express = require("express");
const app = express();
const PORT=5000;



app.get("/",(req,res)=>{
    res.send("Hello");
})


app.listen(process.env.PORT|| 5000,()=>{
    console.log("Server running at port "+PORT);
});    