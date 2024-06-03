const { prototype } = require("events")
const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 1311


app.get("/",(req,res)=>{
    res.send("Nakku")
})

app.listen(PORT,()=>{
    console.log("Server runnning on PORT : "+PORT)
})