const Ticket = require("../Models/ticket");

exports.createticket = async(req,res)=>
{
    console.log("hello from this controller")
    try{
        const {ticketid  , fromstation , tostation , arrival , returndate , trainid ,seattype  } = req.body;
        let amount ;
         if(seattype==="1st AC"){amount=5000}
         else if(seattype==="2nd AC"){amount=3000}
        else if(seattype ==="3rd AC"){amount=2000}
    else if (seattype==="sleeper"){amount=500}
else amount=100
        const newticket  = new Ticket(
            {
                ticketid: ticketid,
                from : fromstation ,
                to : tostation,
                arrival: arrival,
                returndate : returndate,
                trainid : trainid,
                seattype : seattype,
                amount : amount
            }
        )
        console.log(newticket)
        const savticket = await newticket.save();
        res.json(
            {
                message:"successfully created the ticket",
                ticket : savticket
            }
        )

    }
    catch(err)
    {
        res.status(500).json
        (
            {
                error :"error came while creating ticket",
            }
        )
    }
}