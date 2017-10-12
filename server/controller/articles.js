const db = require('../model/articles')
const jwt = require('jsonwebtoken')

const getall = (req, res) => {
  db.find().populate('user')
  then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const create = (req, res) => {
  db.create({
    title: req.body.title,
    content: req.body.content,
    mini_content: req.body.mini_content,
    pic: req.body.pic,
    user: req.headers.ganang.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const getself = (req, res) => {
  db.find({author: req.headers.ganang.id}).populate('user')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const remove = (req, res) => {
  db.remove({_id: req.params.id})
  .then(response =>{
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const edit = (req, res) => {
  db.update({_id: req.params.id}, {
    title: req.body.title,
    content: req.body.content,
    mini_content: req.body.mini_content,
    pic: req.body.pic,
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getall,
  create,
  getself,
  remove,
  edit
}
