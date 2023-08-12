const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    username:process.env.DB_USERNAME,
    dialect:'postgres'
})

module.exports = db