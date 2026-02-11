const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://Paras:!PT!.7J.nV!nJPd@complete-backend.i7a4hip.mongodb.net/halley");

    console.log("Connected to DB");
    

}

module.exports = connectDB

