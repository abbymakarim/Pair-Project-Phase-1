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
        through : 'BookUser',
        as : 'user',
        foreignKey : 'Id'
      })
      // define association here
    }
  };
  Book.init({
    book_name: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    author: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    genre: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};