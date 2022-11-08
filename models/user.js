'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //definir modelo atributos
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
        isAlpha: {
          args: true,
          msg: 'Name solo debe tener letras'
        },
        notEmpty:{
          args: true,
          msg: 'Name no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Name  debe existir'
        }
      } 


    },
    email: { 
      type: DataTypes.STRING,
      //notEmpty notNull
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
          isEmail:{
          args: true,
          msg: 'Email debe tener caracteres especiales'
        },
        notEmpty:{
          args: true,
          msg: 'Email no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Email  debe ser valido'
        }
    },

    },
    password: {
      type: DataTypes.STRING,
      //objeto anidado
      validate:{
        len:{
          args: [5, 10],
          msg: "password entre 5 y 10"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};