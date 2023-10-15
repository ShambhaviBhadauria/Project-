const express = require ('express')
const mongoose = require('mongoose');
const app = express ();
mongoose. set('strictQuery', false);


app.use(express.json());
app.use(express.urlencoded({extended: true}));
const uri = 'mongodb+srv://ense701:<>@ense701.lu4fcfq.mongodb.net/'

const PORT = 3000;


async function connect ()
{
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
    connect();
}
const app = express (8000, () => {
    console.log("Server has been started on Port 8000");


});

