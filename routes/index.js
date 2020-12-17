const router = require('express').Router()
const Controller = require('../controllers/Home-Controllers')
const homepage = require('./example-content')
const register = require('./register')
const login = require('./login')
const { authentication, loggedin } = require('../middlewates/authentification')




//untuk umum
router.get('/', Controller.homepage)


//kalau udah login gabisa kesini
router.use('/register', loggedin, register)
router.use('/login', loggedin, login)


//untuk yang sudah login
router.use(authentication)
router.use('/homepage', homepage)



module.exports = router