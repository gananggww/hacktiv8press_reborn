var express = require('express');
var router = express.Router();
const articles = require('../controller/articles')

router.get('/', articles.getall)
router.get('/self', articles.getself)
router.delete('/:id', articles.remove)
router.put('/:id', articles.edit)
router.post('/', articles.create)


module.exports = router;
