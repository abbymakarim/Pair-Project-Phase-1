const { Book, BookUser } = require('../models');

class BookController {

    static showList (req, res) {
        Book.findAll()
        .then(data => {
            res.render('booklist', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addForm (req, res) {
        res.render('addForm')
    }

    static addBook (req, res) {
        let book = {
            book_name : req.body.book_name,
            author : req.body.author,
            genre : req.body.genre
        }

        Book.create(book)
        .then(data => {
            res.redirect('/books')
        })
        .catch(err => {
            let error = []
            for (let i = 0 ; i < err.errors.length ; i++){
                error.push(err.errors[i].message)
            }
            res.send(error)
        })
    }
    
    static borrowBook (req, res) {
         let data = {
             user_id : +req.session.userId,
             book_id : +req.params.id,
             start_borow_time : new Date(),
             end_date : new Date(),
         }
          BookUser.create(data)
          .then(data => {
              res.render('borrowedBook')
          })
          .catch(err => {
              res.send(err)
          })
    }

} 

module.exports = BookController;