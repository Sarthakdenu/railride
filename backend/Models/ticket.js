const mongoose = require("mongoose");
const ticketschema  = new mongoose.Schema(
    {
       ticketid :
       {
        type : Number,
        required : true
       },
       amount :
       {
         type : Number,
         required : true
       },
       arrival :
       {
        type : String,
        required : true
       },
       returndate :
       {
        type : String,
        required : true
       },
       trainid :
       {
            type : Number,
            required : true
       },
       seattype :
       {
        type : String,
        required : true
       }
       ,

       from :
       {
         type: String ,
         required : true
       }
       ,
       to :
       {
         type : String ,
         required : true
       }
      
    }
)

module.exports = mongoose.model("Ticket", ticketschema);