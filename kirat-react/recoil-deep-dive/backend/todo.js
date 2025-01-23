const express = require("express")
const cors = require("cors")
const port = 3000

const app = express()
app.use(cors())

const todos = [{
    id: 1,
    title : "Go to gym",
    description : "Go to the gym bruv"
}, {
    id : 2,
    title : "Eat healthy bruv",
    description : "Eating healthy and sleeping is wealthy"
}]

app.get("/todos/:id", function (req, res) {
    const id = parseInt(req.params.id, 10); 
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      res.json(todo);
    }
  });

app.listen(port, ()=>{
    console.log("the port is runnning at ", {port});  
})