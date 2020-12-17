'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')
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
      User.hasMany(models.BookUser)
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
    hooks : {
      beforeCreate : (user, options) => {
        const saltRounds = 10
        let salt = bcrypt.genSaltSync(saltRounds)
        let hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
      }
    }, 
    sequelize,
    modelName: 'User',
  });
  return User;
};