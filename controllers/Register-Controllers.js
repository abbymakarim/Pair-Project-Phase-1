const { User } = require('../models/index')

class Controller {
    static registpage(req, res){
        res.render('registerForm.ejs')
    } 

    static postRegister(req, res){
        const user = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone_number: req.body.phone_number,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        User.create(user)
        .then(data => {
            console.log(data)
            res.redirect('/login')
        })
        .catch(err => console.log(err))
    }
}


module.exports = Controller