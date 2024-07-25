//const { omitUndefined } = require('mongoose');
const User = require('../models/user.model.js');

const searchByName = async (req,res) => {
    try{
        const name = req.query.name;
        if(!name){
            console.log("name is not given !");
            res.status(400).json({Message:"Faield ! name is not provided "});
        }
        const regex = new RegExp(name,'i');
        const users = await User.find({name: regex});
        console.log("users -> ",users);
        if(users.length===0){
            console.log("name is not found !");
            res.status(404).json({Message:"Faield ! name is not found "});
        }
        res.status(200).json({
            Data: users,
            Message: "User is get Successfully"
        })
    }catch(err){
        console.log("failed to get user search by name!");
        res.status(500).json({Message: "Failed to get user serach by name !"})
    }
}

module.exports = searchByName;