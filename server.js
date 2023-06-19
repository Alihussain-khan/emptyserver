import express from "express"

const app = express()

app.get("/", (req, res)=>{
    res.send("working")
})

app.listen(9000, ()=>{console.log("server started")})