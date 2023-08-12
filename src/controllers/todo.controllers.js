const Todos = require('../models/todo.database')


const createTodo = async(req,res) => {
    try {
        
        const todo = req.body

        await Todos.create(todo)

        res.status(201).json('tarea creada con exito')
    } catch (error) {
        res.status(400).json(error)
    }
}

const allTarea = async(req,res) => {
    try {
      const tareas =  await Todos.findAll()
      res.status(200).json(tareas)
    } catch (error) {
        
    }
}

const tareaById = async(req,res) => {
    try {
        const { id } = req.params

        const tarea = await Todos.findOne({
            where:{
                id
            }
        })

        res.status(200).json(tarea)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateTarea = async(req,res) => {
    try {
        const { id } = req.params
        const taskUpdated = req.body

        const tarea = await Todos.findOne({
            where:{
                id
            }
        })

        tarea.update(taskUpdated)

        res.status(200).json('tarea actualizada con exito')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTask = async (req,res) => {
    try {
        const { id } = req.params
        const task = await Todos.findOne({
            where:{
                id
            }
        })
        await task.destroy()

        res.status(204).json('eliminado con exito')
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { 
    createTodo,
    allTarea,
    tareaById,
    updateTarea,
    deleteTask
 }