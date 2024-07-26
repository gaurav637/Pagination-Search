const User = require('../models/user.model.js');

const filterUser = async (req,res)=> {
    try{
        const {city,name} = req.query;
        page = parseInt(req.query.page) || 1;
        limit = parseInt(req.query.limit) || 2;
        const skip = (page-1)*limit;
        const user = await User.find({city: city , name: name}).skip(skip).limit(limit);
        if(user.length===0){
            console.log("Not any data found !");
            res.status(404).json({Message:"Not Data"})
        }
        const totalDoc = await User.countDocuments();
        res.status(200).json({
            user,
            page,
            totalDoc
        });
    }catch(err){
        console.log("failed to get user data!");
        res.status(500).json({Message: "failed to get user"});
    }
}

module.exports = filterUser;
