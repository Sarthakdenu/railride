const mongoose = require("mongoose");

const trainschema = new mongoose.Schema(
    {
        name :
        {
            type : String,
            required : true
        } ,
        trainid :
        {
            type : Number,
            required : true
        } ,
        stations :
        [
          { 
            from : {
                type: String,  
            },
            to:
            {
                type: String
            } ,
            arrival :
            {
                type: String
            } ,
            departure :
            {
                type : String
            }
          }
        ],
        platform :
        {
            type : Number,
            required : true
        } , 
        type :
        {
            type : String ,
            required : true
        }
    }
)

module.exports = mongoose.model("Train", trainschema);
