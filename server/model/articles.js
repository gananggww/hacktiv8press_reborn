const mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema({
  title: String,
  content: String,
  mini_content: String,
  pic: String,
  category: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
});
const Article = mongoose.model('Article', articlesSchema);

module.exports = Article
