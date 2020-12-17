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
      User.belongsToMany(models.Book, {
        through : 'BookUser',
        as : 'book',
        foreignKey : 'Id'
      })
      // define association here
    }
  };
  User.init({
    username: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true,
      validate : {
        notEmpty : true
      }
    },
    password: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
            notEmpty : true
      }
    },
    email: {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true,
      validate : {
        isEmail : true
      }     
    },
    phone_number: {
      allowNull : false,
      type : DataTypes.STRING,
      validate : {
        not : ['[a-z]', 'i']
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};