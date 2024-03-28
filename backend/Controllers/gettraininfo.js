const Train = require("../Models/train");

exports.gettraininfo = async(req,res)=>
{
    try
    {
        console.log("user click on gettraininfo")
          const traininfo = await Train.find();
          console.log("hel;o ")
          res.json(
            {
                message:"successfully fetched train informations",
                traininfo : traininfo
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
