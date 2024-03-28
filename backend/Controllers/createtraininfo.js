const Train = require("../Models/train");

exports.creattraininfo = async(req,res) =>
{
   try
   {
      const {name,trainid,platform, type} = req.body;
      const newtrain = new Train(
        {
            name : name,
            trainid : trainid,
            platform : platform,
            type :type
        }
      )
      const savetraininfo = await newtrain.save();
      res.json(
        {
            message: "successfully saved train info",
            traininfo : savetraininfo
        }
      )
   }
   catch(err)
   {
      res.status(500).json(
        {
            error : "error while creating train info"
        }
      )
   }
}