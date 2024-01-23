var express = require('express');
var router = express.Router();

const books = require('../controllers/book');
const auth = require('../middleware/auth');

router.get('/', books.getAll);
router.get('/:id', auth, books.getItem);
router.post('/', auth,  books.add);
router.patch('/:id', auth, books.edit);
router.delete('/:id', auth, books.delete);

module.exports = router;