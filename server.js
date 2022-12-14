const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listEndPoints = require('express-list-endpoints')

//dependencia a la conexion de la db
const connectDB = require('./config/db')

//dependencias a las rutas 
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')
const reviewRoutes = require ('./routes/ReviewRoutes')
const coursesRoutes = require('./routes/CoursesRoutes')

//establecer el archivo de configuracion
//con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'

})

//1.Crear el Objeto app 
const app =express()
app.use(express.json())

//ejecutar la conexion a la db
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users' , userRoutes )
app.use('/api/v1/reviews', reviewRoutes)
app.use('/api/v1/courses', coursesRoutes)

console.log(listEndPoints(app));

//3.metodo listen:ejecutar servidor
app.listen( process.env.PORT , ()=>{
    console.log(`Servidor Iniciado en puerto:${process.env.PORT}`.bgGreen)

})