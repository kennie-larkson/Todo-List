//jshint esversion : 6
const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.set('view engine', 'ejs')

let newTodos = []
app.get('/',(req,res)=>{

    const today = new Date()

    let options = { 
        weekday: 'long', 
        // year: 'numeric', 
        month: 'long', 
        day: 'numeric'}

    const day = today.toLocaleDateString("en-US", options)
    
    res.render('list',{ whatDay: day, new_entry: newTodos})
})

app.post('/',(req,res)=>{
    let newTodo = req.body.todo_entry
    console.log(newTodo)
    newTodos.push(newTodo)
    // res.send('We got your post request: '+ newTodo)
    res.redirect("/")
    // res.render('list',{ whatDay: day, new_entry: newTodo})
})


app.listen(port, ()=>{
    console.log(`Todo List server running on port: ${port}`)
})