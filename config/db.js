const sequelize = require('./seq')
const colors =require('colors')
const UserModel = require('../models/user')

const { DataTypes } = require('sequelize')

//crear el modelo 
const User = UserModel(sequelize,DataTypes)

//crear funcion asyncrona para conexion
const connectDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log('conexión establecida exitosamente'.bgBlue.blue)
        //selecccionar los users:
        //const users = await User.findAll();
        //console.log(users)
        //crear users
    } catch (error) {
        console.error(error)
    }
}
//ejecutar la funcion
//connectDB()

module.exports 
