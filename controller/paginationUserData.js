const User = require('../models/user.model.js');

const getUserByPagination = async (req,res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;

        const skip = (page - 1) * limit; 
        const users = await User.find().skip(skip).limit(limit);
        const total = await User.countDocuments();
        res.json({
            users,
            page,
            limit,
            total
        });
    }catch(err){
        console.log("failed to pagination");
        res.status(500).json({Message: "failed pagination!"});
    }
}

module.exports = getUserByPagination;