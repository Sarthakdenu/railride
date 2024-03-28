const User = require("../Models/user")

exports.createuserinfo =  async(req,res)=>
{
    try{
        console.log("hello from createuser controller")
        const {name,gender,age,phoneno,email,password,confirm} = req.body;
        if(confirm!==password)
        { 
            console.log( "not matching confrim and create password")
            
        }
        const newuser = new User(
            {
                name:name,
                gender:gender,
                age:age,
                phoneno: phoneno,
                password: password,
                email:email
            })
            console.log(newuser)
            const saveuser= await newuser.save();
            res.json(
                {
                    message:"successfully created user",
                    user : saveuser
                }
            )      
    }
    catch(err)
    {
         res.status(500).json(
            {
                error:"error while creating user info"
            }
         )
    }
}