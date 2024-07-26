const { default: mongoose } = require('mongoose');
const monggose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    city:{
        type: String
    },
    phoneNumber:{
        type: Number,
        unique: true
    },
    
},{timestamps: true})

const user = mongoose.model("User",userSchema);
module.exports = user;