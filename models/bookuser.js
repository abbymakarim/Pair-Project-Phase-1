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
      // BookUser.belongsTo(models.Book, {
      //   foreignKey : "id"
      // })
      // BookUser.belongsTo(models.User, {
      //   foreignKey : "id"
      // })
      // define association here
       
    }
  };
  BookUser.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    start_borow_time: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BookUser',
  });
  return BookUser;
};