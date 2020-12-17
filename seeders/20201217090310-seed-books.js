'use strict';
const books = [
  {
    book_name : "Laskar Pelangi",
    author : "Andrea Hirata",
    genre : "Novel"
  },
  {
    book_name : "Dilan dan Milea",
    author : "Pidi Baiq",
    genre : "Romance"
  },
  {
    book_name : "Perahu Kertas",
    author : "Dewi Lestari",
    genre : "Novel"
  },
  {
    book_name : "Marmut Merah Jambu",
    author : "Raditya Dika",
    genre : "Komedi"
  }
]

books.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', books)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Books', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
