 
//objeto de conexion
const sequelize =require('../config/seq')
//DataTypes
const {DataTypes,ValidationError} =require('sequelize')
//El modelo
const ReviewModel = require('../models/reviews')
const review = require('../models/reviews')
//Crear el objeto usuario
const Review = ReviewModel(sequelize,DataTypes)

exports.TraerReseñas = async (req,res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(
            {
                "response": true,
                "data" :  reviews
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
exports.TraerReseñaPorId = async (req,res) =>{
    try {
        const reviewId = await Review.findByPk(req.params.id)
        //si usuario no existe
        if(!reviewId){
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "reseñas no existe"
                    ]
                }
            )
        }else{
            res.status(200).json(
                {
                    "succes": true,
                    "data" : reviewId
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
exports.crearReseña = async(req,res) =>{
    try {
        const newReview = await Review.create(req.body);
console.log(newReview);
        res.status(201).json(
            {
                "success" : true,
                "data" : newReview    
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
exports.ActualizarResena = async(req, res)=>{
    try {
        //consultar datos actualizados
        const upReview = await Review.findByPk(req.params.id)
        if(!upReview){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "reseñas no existe"
                    ]
                }
            )
        }else{
            console.log(req.body)
            console.log(req.params.id)
            //actualizar usuario  por Id
            await Review.update(req.body,{
                where:{
                    id: req.params.id
                }
            });
            //seleccionar usuario actualizado
            //consultar datos actualizados
            const reviewAct = await Review.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "succes" :true,
                "data" : reviewAct
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
exports.EliminarReseña= async (req,res) =>{
    //buscar al usuario
    try {
        const deleteReview= await Review.findByPk(req.params.id)
        if(!deleteReview){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "review no existe"
                    ]
                }
            )
        }else{
            // Eliminar usuario por id
            await Review.destroy({
                where: {
                id: req.params.id
                }
            });
            //reponse
            res.status(200).json(
                {
                    "succes": true,
                    "data": deleteReview
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
