const express = require('express')

const router =express.Router()

//establecer rutas de bootcamp
//crear rutas(endpoint,uri) para los bootscamps
//get: obtener datos Read
router.get('/', (req , res) =>{
    res.status(200).json(
        {
            "message": "aqui se va a mostrar todos los bootcamps"
        }
    )
})


//POST : crear un nuevo recurso
router.post('/',(req , res)=>{
    res.status(201).json({
        "message": `aqui se va a crear el bootcamp`
    })
})

//PUT- PATCH actualizar
app.put('/:id', (req , res)=>{
    res.status(200).json(
        {
            "message": `aqui se va a actualizar el bootcamp` 

        }
    )
})

//DELETE : borrar un bootcamp
app.delete('/:id', (req , res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar:${req.params.id}`
        }
    )

})





//exportar rutas
module.exports = router
