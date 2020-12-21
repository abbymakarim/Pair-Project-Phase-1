'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsToMany(models.User, {
        through : models.BookUser,
        foreignKey : "book_id"
      })

      // define association here
    }
  };
  Book.init({
    book_name: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "nama tidak boleh kosong"
        }
        
      }
    },
    author: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'author tidak boleh kosong'
        }
      }
    },
    genre: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'genre tidak boleh kosong'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};