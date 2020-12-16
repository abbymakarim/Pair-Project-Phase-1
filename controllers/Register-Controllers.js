const { User } = require('../models/index')

class Controller {
    static registpage(req, res){
        res.render('registerForm.ejs')
    } 
}


module.exports = Controller