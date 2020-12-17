'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BookUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Users"
          },
          key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      book_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Books"
          },
          key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      start_borow_time: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BookUsers');
  }
};