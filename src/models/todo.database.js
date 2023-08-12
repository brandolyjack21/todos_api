const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Todos = db.define('todos',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
    },
    title:{
        type:DataTypes.STRING(60),
        allowNull:false,
        unique:true
    },
    description:{
        type:DataTypes.STRING(255)
    },
    completed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})



module.exports = Todos