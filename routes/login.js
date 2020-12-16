const router = require('express').Router()
const Controller = require('../controllers/Login-Controllers')

router.get('/', Controller.loginpage)

module.exports = router