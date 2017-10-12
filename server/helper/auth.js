const authGan = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, "livecode")
    req.headers.ganang = decoded
    next()
  }
  else {
    res.send("login dong")
  }
}

module.exports = authGan
