const express = require("express")
const app = express()
const port = 3000

app.use((req,res)=>{
    console.log("we got a new request!")
    res.send("we got your request! this is a response!")
})

app.listen(port, ()=>{
    console.log("listening on port 3000!")
})