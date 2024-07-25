const User = require('../models/user.model.js');

const searchByCity = async (req,res) => {
    try{
        const city = req.query.city;
        if(!city){
            console.log("city is not given !");
            res.status(400).json({Message:"Faield ! city is not provided "});
        }
        const regex = new RegExp(city,'i');
        const users = await User.find({city: regex});
        if(users.length===0){
            console.log("city is not found !");
            res.status(404).json({Message:"Faield ! city is not found "});
        }
        res.status(200).json({
            Data: users,
            Message: "User is get Successfully"
        })
    }catch(err){
        console.log("failed to get user search by users!");
        res.status(500).json({Message: "Failed to get user serach by users !"})
    }
}

module.exports = searchByCity;