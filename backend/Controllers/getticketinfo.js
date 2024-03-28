const Ticket = require("../Models/ticket");


exports.getticketinfo = async(req,res)=>
{
    try
    {
         const ticketinfo = await Ticket.find();
         res.json(
            {
                message:"successfully feteched ticket info",
                ticketinfo : ticketinfo
            }
         )
    }
    catch(err)
    {
        res.status(500).json(
            {
                error:"error while fetchiing ticketinfo"
            }
        )
    }
}