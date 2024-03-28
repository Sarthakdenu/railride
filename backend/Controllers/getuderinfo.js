const User = require("../Models/user");

exports.getuserinfo = async(req,res)=>
{
    try
    {
          const traininfo = await User.find();
          res.json(
            {
                message:"successfully fetched train informations",
                user : traininfo
            }
          )
    }
    catch(err)
    {
        res.status(500).jsom(
            {
                error:"error while fetching train info"
            }
        )
    }
}
