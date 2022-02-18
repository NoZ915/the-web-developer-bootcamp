const express = require("express")
const app = express()
const port = 3000

// app.use((req,res)=>{
//     console.log("we got a new request!")
//     res.send("we got your request! this is a response!")
// })

app.get("/r/:subreddit/:postID",(req,res)=>{
    const {subreddit, postID} = req.params
    res.send(`<h1>vewing the postID: ${postID} on the ${subreddit} subreddit</h1>`)
})

app.get("/",(req,res)=>{
    res.send("this is a home page!")
})

app.get("/cats", (req,res)=>{
    res.send("meow!")
})

app.get("/dogs",(req,res)=>{
    res.send("woof!")
})

app.get("/search",(req,res)=>{
    const {q} = req.query
    if(!q){
        res.send("nothing found if nothing searched!")
    }
    res.send(`search result for ${q}`)
})

app.listen(port, ()=>{
    console.log("listening on port 3000!")
})