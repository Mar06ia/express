'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
          isAlpha:{
            args: true,
            msg: 'Title solo debe tener letras'
          },
        notEmpty:{
          args: true,
          msg: 'Title no debe estar vacio'
        },
        notNull:{
          args: true,
          msg: 'Title dehe existir'
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

    weeks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
        validate:{
          notEmpty:{
            args: true,
            msg: 'Weeks no debe estar vacio'
          },
          isInt:{
            args: true,
            msg: "Weeks debe ser integer"
          }
        }
    },

    enroll_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true, 
      validate:{
        notEmpty:{
          args: true,
          msg: 'Weeks no debe estar vacio'
        },
        isFloat: {
          args: true,
          msg: 'Weeks debe ser decimal'
        }
      }
    },


    minimum_skill: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{

        notEmpty:{
          args: true,
          msg: 'Skill no debe estar vacio'
        },
        isInt:{
          args: true,
          msg: "Skill debe ser integer"
        }
      }
    }


  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};