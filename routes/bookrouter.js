const express = require('express');
const router = express.Router();
const ControllerBook = require('../controllers/bookController.js');


router.get('/', ControllerBook.showList);
router.get('/add', ControllerBook.addForm);
router.post('/add', ControllerBook.addBook);
router.get('/:id/borrow', ControllerBook.borrowBook);

module.exports = router