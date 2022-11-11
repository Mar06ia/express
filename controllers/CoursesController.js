 
//objeto de conexion
const sequelize =require('../config/seq')
//DataTypes
const {DataTypes,ValidationError} =require('sequelize')
//El modelo
const CoursesModel = require('../models/courses')
const course = require('../models/courses')
//Crear el objeto usuario
const Course = CoursesModel(sequelize,DataTypes)

exports.TraerCursos = async (req,res) => {
    try {
        const courses = await User.findAll();
        res.status(200).json(
            {
                "response": true,
                "data" :  courses
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
exports.TraerCursosPorId = async (req,res) =>{
    try {
        const coursesId = await course.findBykpk(req.params.id)
        //si usuario no existe
        if(!coursesId){
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "curso no existe"
                    ]
                }
            )
        }else{
            res.status(200).json(
                {
                    "succes": true,
                    "data" : coursesId
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
exports.crearCursos = async(req,res) =>{
    try {
        const newCourses = await Course.create(req.body);

        res.status(201).json(
            {
                "success" : true,
                "data" : newCourses    
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
exports.ActualizarCursos = async(req, res)=>{
    try {
        //consultar datos actualizados
        const upCourses = await Course.findByPk(req.params.id)
        if(!upCourses){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "cursos no existe"
                    ]
                }
            )
        }else{
            //actualizar usuario  por Id
            await Course.update(req.body,{
                where:{
                    id: req.params.id
                }
            });
            //seleccionar usuario actualizado
            //consultar datos actualizados
            const userAct = await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "succes" :true,
                "data" : userAct
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
exports.EliminarCursos = async (req,res) =>{
    //buscar al usuario
    try {
        const deleteCourses = await Course.findByPk(req.params.id)
        if(!deleteCourses){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "cursos no existe"
                    ]
                }
            )
        }else{
            // Eliminar usuario por id
            await Course.destroy({
                where: {
                id: req.params.id
                }
            });
            //reponse
            res.status(200).json(
                {
                    "succes": true,
                    "data": deleteCourses
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
