 
//objeto de conexion
const sequelize =require('../config/seq')
//DataTypes
const {DataTypes,ValidationError} =require('sequelize')
//El modelo
const UserModel = require('../models/user')
const user = require('../models/user')
//Crear el objeto usuario
const User = UserModel(sequelize,DataTypes)

exports.TraerUsuarios = async (req,res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
                "response": true,
                "data" :  users
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
exports.TraerUserPorId = async (req,res) =>{
    try {
        const userId = await user.findBykpk(req.params.id)
        //si usuario no existe
        if(!userId){
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "usuario no existe"
                    ]
                }
            )
        }else{
            res.status(200).json(
                {
                    "succes": true,
                    "data" : userId
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
exports.crearUser = async(req,res) =>{
    try {
        const newUser = await User.create(req.body);

        res.status(201).json(
            {
                "success" : true,
                "data" : newUser    
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
exports.ActualizarUser = async(req, res)=>{
    try {
        //consultar datos actualizados
        const upUser = await User.findByPk(req.params.id)
        if(!upUser){
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "usuario no existe"
                    ]
                }
            )
        }else{
            //actualizar usuario  por Id
            await User.update(req.body,{
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
exports.EliminarUser = async (req,res) =>{
    //buscar al usuario
    const u = await User.findByPk(req.params.id)

    // Eliminar usuario por id
    await User.destroy({
        where: {
        id: req.params.id
        }
    });
    //reponse
    res.status(200).json(
        {
            "succes": true,
            "data": u
        }
    )
}
