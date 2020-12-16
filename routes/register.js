const router = require('express').Router()
const Controller = require('../controllers/Register-Controllers')

router.get('/', Controller.registpage)


module.exports = router