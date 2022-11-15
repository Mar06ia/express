 
//objeto de conexion
const sequelize =require('../config/seq')
//DataTypes
const {DataTypes,ValidationError} =require('sequelize')
//El modelo
const BootcampModel = require('../models/bootcamp')
const bootcamp = require('../models/bootcamp')
//Crear el objeto usuario
const Bootcamp = BootcampModel(sequelize,DataTypes)

exports.TraerBootcamps = async (req,res) => {
    try {
        const bootcamps = await Bootcamp.findAll();
        res.status(200).json(
            {
                "response": true,
                "data" :  bootcamps
            }
        )    
    } catch (error) {
        res
        .status(500)
        .json({
            "success":  false,
            "errors": "error de servidor"
        })      
    }
}

//Traer por Id
//FUNCIONALES
exports.TraerBootcampPorId = async (req,res) =>{
    try {
        const bootcampId = await Bootcamp.findByPk(req.params.id)
        //si usuario no existe
        if(!bootcampId){
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "bootcamp no existe"
                    ]
                }
            )
        }else{           
            return res.status(200).json(
                {
                    "succes": true,
                    "data" : bootcampId
                }
            )
        }
    } catch (error) {
        res
        .status(500)
        .json({
            "success":  false,
            "errors": "error de servidor"
        })
    }
    
}


//Agregar datos con Post //validación
exports.crearBootcamp = async(req,res) =>{
    try {
        const newBootcamp = await Bootcamp.create(req.body);

        res.status(201).json(
            {
                "success" : true,
                "data" : newBootcamp  
            }
        )
    } catch (error) {
        if(error instanceof ValidationError){

            //Poner mensajes de error en variable
            const errores = error.errors.map((e) =>e.message)
            res
                .status(422)
                .json({
                    "success":  false,
                    "errors": errores
                })
        }else{
            //errores de servidor
            res
                .status(500)
                .json({
                    "success":  false,
                    "errors": "error de servidor"
                })
        }
    
    }
}


//Actualizar User: Put:Pach
exports.ActualizarBootcamp = async(req, res)=>{
    try {
        //consultar datos actualizados
        const upBootcamp = await Bootcamp.findByPk(req.params.id)
        if(!upBootcamp){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "bootcamp no existe"
                    ]
                }
            )
        }else{
            console.log(req.params.id)
            console.log(req.body)
            //actualizar usuario  por Id
            await Bootcamp.update(req.body,{
                where:{
                    id: req.params.id
                }
            });
            //seleccionar usuario actualizado
            //consultar datos actualizados
            const bootcampAct = await Bootcamp.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "succes" :true,
                "data" : bootcampAct
            }) 

        }
    } catch (error) {
        res
            .status(500)
            .json({
                "success":  false,
                "errors": "error de servidor"
            }) 
    }
}
     
//Eliminar User
exports.EliminarBootcamp = async (req,res) =>{
    //buscar al usuario
    try {
        const deleteBootcamp = await Bootcamp.findByPk(req.params.id)
        if(!deleteBootcamp){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "bootcamp no existe"
                    ]
                }
            )
        }else{
            // Eliminar usuario por id
            await Bootcamp.destroy({
                where: {
                id: req.params.id
                }
            });
            //reponse
            res.status(200).json(
                {
                    "succes": true,
                    "data": deleteBootcamp
                }
            )
        }
    } catch (error) {
        res
        .status(500)
        .json({
            "success":  false,
            "errors": "error de servidor"
        }) 
    }
  
    
}
