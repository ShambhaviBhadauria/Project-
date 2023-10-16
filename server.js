const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://shambhavi:zddX9q9f8F9mUf9C@ense701.s1q557s.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ArticleSchema = new mongoose.Schema({
  title: String,
  authorname: String,
  yearOfPublication: String,
  volume: Number,
  extraInformation: String,
  responseBool: Boolean,
  responseEmail: String
});

const ArticleModel = mongoose.model('articles', ArticleSchema);

app.get('/getArticles', (req, res) => {
  ArticleModel.find({})
    .then(function (articles) {
      res.json(articles);
    })
    .catch(function (err) {
      console.log(err); 
      res.status(500).send('Error getting articles');
    });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001!');
});

