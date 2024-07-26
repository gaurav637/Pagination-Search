const User = require('../models/user.model.js');

const getAllUserBtwdAt = async(req, res) => {
    
    let {searchKey,startDate,endDate} = req.body;
    console.log("data -> ",searchKey,"startDate -> ",startDate,"enddate -> ",endDate);
    const page = parseInt(req.query.page)||1;
    const limit = parseInt(req.query.limit)||4;
    let userData = {};
    if(searchKey && searchKey != "")
    {
        userData = searchKey && searchKey !==""
        ?
        {
            $or:[
                {
                    city:{$regex:searchKey.trim(),$options:"i"}
                },
                {
                    name:{$regex:searchKey.trim(),$options:"i"}
                }
            ]
        }
        :
        {}
    }

   // const userfirst = await User.find(userData);
    //console.log(userfirst);
    //console.log("userData",userData);
    if (startDate && endDate) {
        userData.createdAt = {
            $gte: new Date(startDate),  
            $lte: new Date(endDate)    
        };
    }
    let user = await User.find(userData).skip((page-1)*limit).limit(limit)

    const total = await User.countDocuments();
 res.status(200).json({
    success:true,
    data:user,
    page,
    total
})
    

}

module.exports = getAllUserBtwdAt;