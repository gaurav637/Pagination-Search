const User = require('../models/user.model.js');

const newUser = async (req,res) => {
    try{

        const {name,city,phoneNumber} =  req.body;
        if(!name || !city || !phoneNumber){
            console.log("Please provide all user information!");
            res.status(400).json({Message: "Not Provided All User Information!"});
        }
        const phone = await User.findOne({phoneNumber});
        if(phone){
            console.log("this phone number is already used !");
            res.status(400).json({Message:"Phone number already used!"});
        }
        const user = new User({
            name,
            city,
            phoneNumber
        })

        const createdUser = user.save();
        res.status(201).json({
            Data: user,
            Message: "User Created Succcessfully"
        })

    }catch(err){
        console.log("Failed to create new user");
        res.status(500).json({
            Message: "Faield to create new User!"
        })
    }
}

module.exports = newUser;