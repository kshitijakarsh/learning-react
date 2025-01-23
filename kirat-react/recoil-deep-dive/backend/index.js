const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())


app.get("/", function(req,res){
    const notifications = {
        networks : 7,
        jobs : 8,
        messaging : 7,
        notification : 5
    }
    res.json(notifications)
})

app.listen(port, ()=>{
    console.log("back-end is running on port", {port});  
})