
//objeto de conexion
const sequelize =require('../config/seq')
//DataTypes
const {DataTypes} =require('sequelize')
//El modelo
const UserModel = require('../models/user')
const user = require('../models/user')
//Crear el objeto usuario
const User = UserModel(sequelize,DataTypes)



//Traer por Id
exports.getTraerUserPorId = async (req,res) =>{
    const userId = await user.findBykpk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data" : userId
        }
    )
}


//Agregar datos con Post
exports.crearUser = async(req,res) =>{
    const newUser = await User.create(req.body);

    res.status(201).json(
        {
            "success" : true,
            "data" : newUser    
        }
    )
}


//Actualizar User: Put
exports.ActualizarUser = async(req, res)=>{
    //actualizar usuario  por Id
    await User.update(req.body,{
        where:{
            id: req.params.id
        }
    });

    //consultar datos actualizados
    const upUser = await User.findByPk(req.params.id)

    res.status(200).json({
        "succes" :true,
        "data" :upUser
    }

    )
}
     




exports.EliminarUser = (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a borrar este usuario ${req.params.id}`,

        }
    )
}