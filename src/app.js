const express = require('express')
const db = require('./utils/database')
const Todos = require('./models/todo.database')
const { createTodo, allTarea, tareaById, updateTarea, deleteTask } = require('./controllers/todo.controllers')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT ?? 7000

db.authenticate()
  .then(res => console.log('autenticado sin problemas'))
  .catch(error => console.log(error))

Todos.sync()

app.use(express.json())

app.get('/', (req,res) => {
    send('todo bien')
})



app.get('/todos', allTarea)

app.post('/todos', createTodo)

app.get('/todos/:id',tareaById)

app.put('/todos/:id',updateTarea)

app.delete('/todos/:id',deleteTask)



app.listen(PORT, () => {
    console.log('puerto corriendo con normalidad');
})