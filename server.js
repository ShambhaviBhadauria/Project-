const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =  "mongodb+srv://shambhavibhadauria152:<Shamy152>@shambhavi.8cjauuk.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();
app.listen(8000, () => {
    console.log("Server started on Port 8000");
});
