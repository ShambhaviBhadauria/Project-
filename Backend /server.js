const express = require ("express");
const mongoose = require ("mongoose");

const uri = 'mongodb+srv://ense701:<zddX9q9f8F9mUf9C>@ense701.lu4fcfq.mongodb.net/'

async function connect ()
{
    try{
         await.moongose.connect(uri)
         console.log("Connected to MongoDB")
    }catch(error){
        console.error(error);
    }
}
const app = express (8000, () => {
    console.log("Server has been started on Port 8000");


});

