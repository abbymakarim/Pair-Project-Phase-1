const { Book, BookUser, User } = require('../models');
const ConvertDate = require('../helper/date.js')

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

    static bookBorrowed (req, res){
        let id = req.session.userId
        User.findAll({
            include : Book,
            where : {id : id}
        })
        .then(data => {

            res.render ('bookBorrowed', {data : data, ConvertDate})
            
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editForm (req, res) {
        let id = +req.params.id
        Book.findByPk(id)
        .then(data => {
            res.render('editForm', {data})
        })
        .catch(err => {
            res.send(err)
        }) 
    }
    
    static editBooks (req, res) {
        let id = +req.params.id
        console.log(req.body)
        let data = {
            book_name : req.body.title,
            author : req.body.author,
            genre : req.body.genre
        }
        Book.update(data, {where : {id : id}})
        .then(data => {
            res.redirect('/books')
        })
        .catch(err => {
            res.send(err)
        })
    }

} 

module.exports = BookController;