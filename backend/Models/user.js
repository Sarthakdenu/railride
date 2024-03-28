const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
    {
        name :
        {
            type : String,
            required : true
        },
        password :
        {
            type: String,
            required : true
        },
        email :
        {
            type : String,
            required : true
        },
        age :
        {
            type : Number,
            required : true
        } ,
        phoneno :
        {
            type : Number,
            required : true
        },
        gender :
        {
         type :String ,
         required : true
        } ,
        ticket :
        [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Ticket'
        }
        ] ,
        trains : 
        [
         {
             type : mongoose.Schema.Types.ObjectId,
             ref : "Train"
         }
        ]
    }
)

module.exports = mongoose.model("User", userschema);