const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


mongoose.connect('/', {
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

app.post('/postArticles', (req, res) => ({

  const submission = new submission ({

    title: FormData.title,
    authorname: FormData.authorname,
    yearOfPublication: FormData.yearOfPublication,
    volume: FormData.volume,
    extraInformation: FormData.extraInformation,
    responseBool: FormData.responseBool,
    responseEmail: FormData.responseEmail,

  });
  
  submission.save((err, submission) =>
  {
     if(err)
     {
        console.error(err);
        res.status(500).send('Error happened while trying save the submission!')
     }
     else 
     {
        console.log('Submission Successful!', submission);
        res.status(200), send('submission successful!')
     }
     }
  })


  

app.listen(3002, () => {
  console.log('Server is running on port 3001!');
});
