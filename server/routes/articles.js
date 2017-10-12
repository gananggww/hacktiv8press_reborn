const express = require('express');
const router = express.Router();
const articles = require('../controller/articles')
const authGan = require('../helper/auth')

router.get('/:category', authGan, articles.getcategory)
router.get('/', authGan, articles.getall)
router.get('/self', authGan, articles.getself)
router.delete('/:id', authGan, articles.remove)
router.put('/:id', authGan, articles.edit)
router.post('/', authGan, articles.create)


module.exports = router;
