'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    title:{
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

    text:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
          isAlpha:{
            args: true,
            msg: 'Txt solo debe tener letras'
          },
        notEmpty:{
          args: true,
          msg: 'Txt no debe estar vacio'
        },
        notNull:{
          args: true,
          msg: 'Txt dehe existir'
        }
      }
    },

    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      //objeto anidado
      validate:{
        isFloat:{
          args: true,
          msg: 'Rating debe ser decimal'
          },
        notEmpty:{
          args: true,
          msg: 'Rating no debe estar vacio'
        },
        notNull:{
          args: true,
          msg: 'Rating dehe existir'
        }
      }
    }

  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  });
  return reviews;
};