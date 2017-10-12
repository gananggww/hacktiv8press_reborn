var express = require('express');
var router = express.Router();
const users = require('../controller/users')
const FB = require('fb')
const fb = require({version: 'v2.10'})

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.fbaccesstoken)
  next()
}

router.get('/login', setAccessToken, users.login)


module.exports = router;
