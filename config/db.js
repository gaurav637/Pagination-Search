const monggose = require('mongoose');
require("dotenv/config");

const connectDB = ()=> {
    try{
        const url = process.env.MONGO_URI;
        monggose.connect(url);
        console.log("database connected ");

    }catch(err){
        console.log("Failed to connect Database");
    }
}

module.exports = connectDB;