const express = require ('express')
const mongoose = require('mongoose')
const { default: useColorScheme } = require('react-native/Libraries/Utilities/useColorScheme')

const app = express ()

mongoose.connect('mongodb+srv://ense701:zddX9q9f8F9mUf9C@ense701.lu4fcfq.mongodb.net/ense701')

const ArticleSchema = mongoose.Schema({

})


app.listen(3001, () => {

   app.get("/getArticles", (req, res)=>
   {

   })
    const ArticleSchema = new mongoose.Schema({
        title: string,
        authorname: string,
        yearOfPublication: string,
        volume: number,
        extraInformation: string,
        reponseBool: boolean,
        responseEmail: string
    })
   
    

   const ArticleModel = mongoose.model("articles", ArticleSchema) // article 
   app.get("/getArticles", (req, res) =>
   {
       res.json(ArticleModel.find({}).then(function(articles){
          res.json(articles)
       })).catch(function(err))
       {
           console.log(err)
       }
   })





  

    console.log("Server is running!")
})
