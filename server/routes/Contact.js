var express = require('express');
var router = express.Router();

const contacts = require('../controllers/contact');
const auth = require('../middleware/auth');

router.get('/', contacts.getAll);
router.get('/:id', auth, contacts.getItem);
router.post('/', contacts.add);
router.patch('/:id', auth, contacts.edit);
router.delete('/:id', auth, contacts.delete);

module.exports = router;