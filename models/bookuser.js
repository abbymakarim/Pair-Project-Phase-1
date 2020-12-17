'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookUser.init({
    user_id: {
      type : DataTypes.INTEGER,
      allowNull : false,
      references : {
        model : 'users',
        key : 'id'
      }
    },
    book_id: {
      type : DataTypes.INTEGER,
      allowNull : false,
      references : {
        model : 'book',
        key : 'id'
      }
    },
    start_borow_time: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BookUser',
  });
  return BookUser;
};