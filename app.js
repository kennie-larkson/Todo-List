//jshint esversion : 6
const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const day = require(__dirname + '/date')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.set('view engine', 'ejs')

let generalTodos = []
let workTodos = []


app.get('/',(req,res)=>{

    res.render('list',{ listTitle: day, new_entry: generalTodos})
})

app.post('/',(req,res)=>{

    console.log(req.body)
    let newTodo = req.body.todo_entry
    if (req.body.list === "Work") {
        workTodos.push(newTodo)
        res.redirect('/work')
    } else {
        newTodos.push(newTodo)
        res.redirect("/")
        
    }
    
})

app.get('/work',(req,res)=>{
    // res.json({status:"We are currently working on this page"})
    res.render('list',{listTitle:"Work List", new_entry: workTodos})
})

app.get('/about',(req,res)=>{
    res.render('about')
})


app.listen(port, ()=>{
    console.log(`Todo List server running on port: ${port}`)
})