const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://ense701:zddX9q9f8F9mUf9C@ense701.lu4fcfq.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String
  },
  authorname: {
    type: String
  },
  yearOfPublication: {
    type: String
  },
  volume: {
    type: Number
  },
  extraInformation: {
    type: String
  },
  responseBool: {
    type: Boolean
  },
  responseEmail: {
    type: String 
}
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

app.post('/postArticles', (req, res) => { 
  const newArticles = new ArticleModel(req.body);
  newArticles.save()
    .then(function (article) {
      res.json(article);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send('Article unable to be posted due to error');
    });
});

app.listen(3002, () => {
  console.log('Server is running on port 3001!');
});
