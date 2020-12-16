const router = require('express').Router()
const Controller = require('../controllers/Home-Controllers')
const homepage = require('./example-content')
const register = require('./register')
const login = require('./login')


router.get('/', Controller.homepage)
router.use('/register', register)
router.use('/login', login)
router.use('/homepage', homepage)



module.exports = router