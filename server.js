const express = require('express')
const dotenv = require('dotenv')
const collors = require('colors')

//dependencia a la conexion de la db
const connectDB = require('./config/db')

//dependencias a las rutas 
const bootcampRoutes = require('./routes/BootcampRoutes')

//establecer el archivo de configuracion
//con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'

})

//1.Crear el Objeto app 
const app =express()

//ejecutar la conexion a la db
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users' , UserRoutes )

//usar archivo de routeo
app.use('/api/v1/bootcamps' , bootcampRoutes)

//2. Crear una ruta de prueba
//cualquier direccion  
//app.get('/' , (request, response)=>{
//    response.send('Ruta Funcional')
//})

//crear rutas(endpoint,uri) para los bootscamps
//get: obtener datos Read
/*
app.get('/api/v1/bootcamps', (req , res) =>{
    res.status(200).json(
        {
            "message": "aqui se va a mostrar todos los bootcamps"
        }
    )
})
*/

//obtener recurso por id
/*
app.get('/api/v1/bootcamps/:id' ,()=>{
    res.status(200).json(
        {
            "message": `aqui va a mostrarse el bootcamp cuyo id es ${req.param.id}`
        }
    )

})
//app.get('');
*/

//POST : crear un nuevo recurso
/*
app.post('/api/v1/bootcamps',(req , res)=>{
    res.status(201).json({
        "message": `aqui se va a crear el bootcamp○`
    })
})

//PUT- PATCH actualizar
app.put('/api/v1/bootcamps/:id', (req , res)=>{
    res.status(200).json(
        {
            "message": `aqui se va a actualizar el bootcamp` 

        }
    )
})
*/
/*
//DELETE : borrar un bootcamp
app.delete('/api/v1/bootcamps/:id', (req , res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar:${req.params.id}`
        }
    )

})
*/

//3.metodo listen:ejecutar servidor
app.listen( process.env.PORT , ()=>{
    console.log(`Servidor Iniciado en puerto:${process.env.PORT}`.bgGreen)

})