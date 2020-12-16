const router = require('express').Router()

//ini untuk masuk ke content jika sudah login
router.get('/', (req, res) => {
    res.render('homepage.ejs')
} )



module.exports = router