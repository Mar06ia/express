'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
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


    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
        isAlpha: {
          args: true,
          msg: 'Description solo debe tener letras'
        },
        notEmpty:{
          args: true,
          msg: 'Description no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Description debe existir'
        },
        len:{
          args: [5,500],
          msg: "Description entre 2 y 500 caracteres"
        }
      } 
    },


    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
        notEmpty:{
          args: true,
          msg: 'Phone no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Phone debe existir'
        },
        len:{
          args: [2, 10],
          msg: "phone entre 2 y 10"
        }/*,
        isNumeric:{
          args: true,
          msg: 'Phone debe tener numeros'
        }*/
      }
    },

    average_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
        isFloat:{
          args: true,
          msg: 'Cost debe ser decimal'
          },
        notEmpty:{
          args: true,
          msg: 'Cost no debe estar vacio'
        },
        notNull:{
          args: true,
          msg: 'Cost debe existir'
        }
      }     
    },

    average_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
        isInt:{
          args: true,
          msg: 'Rating debe ser entero'
          },
        notEmpty:{
          args: true,
          msg: 'Rating no debe estar vacio'
        },
        notNull:{
          args: true,
          msg: 'Rating debe existir'
        }
      }
    }

  }, {
    sequelize,
    modelName: 'Bootcamp',
    timestamps: false
  });
  return Bootcamp;
};