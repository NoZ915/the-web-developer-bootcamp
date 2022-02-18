const express = require("express")
const app = express()
const port = 3000

app.use(()=>{
    console.log("we got a new request!")
})

app.listen(port, ()=>{
    console.log("listening on port 3000!")
})