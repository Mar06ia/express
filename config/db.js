const sequelize = require('./seq')
const colors =require('colors')



//crear funcion asyncrona para conexion
const connectDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log('conexión establecida exitosamente'.bgBlue.blue)
        
    } catch (error) {
        console.error(error)
    }
}
//ejecutar la funcion
//connectDB()

module.exports = connectDB
