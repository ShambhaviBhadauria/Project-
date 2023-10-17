const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://ense701:zddX9q9f8F9mUf9C@ense701.lu4fcfq.mongodb.net/backend', {
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

const ArticleModel = mongoose.model('Article', ArticleSchema);

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
  const formData = req.body;
  const submission = new ArticleModel({
    title: formData.title,
    authorname: formData.authorname,
    yearOfPublication: formData.yearOfPublication,
    volume: formData.volume,
    extraInformation: formData.extraInformation,
    responseBool: formData.responseBool,
    responseEmail: formData.responseEmail,
  });

  submission.save((err, savedSubmission) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error happened while trying to save the submission!');
    } else {
      console.log('Submission Successful!', savedSubmission);
      res.status(200).send('Submission successful!');
    }
  });
});

app.listen(3003, () => {
  console.log('Server is running');
});
