const User = require("../Models/user");
const Train = require("../Models/train");
const Ticket = require("../Models/ticket");

exports.updateuserinfo = async (req, res) => {
    try {
        console.log("hello");

        const { trainid, ticketid, name } = req.body; 
        const user = await User.findOne({ name: name });
        const train = await Train.findOne({ trainid: trainid });
        const ticket = await Ticket.findOne({ ticketid: ticketid });
        console.log(user, train, ticket); 
        const updateduser = await User.findByIdAndUpdate(user._id,
            {
                $push: {
                    trains: train._id,
                    ticket: ticket._id 
                }
            },
            {
                new: true
            });

        res.json({
            message: "Successfully updated user info",
            user: updateduser
        });
    } catch (err) {
        res.status(500).json({
            error: "Error while updating user info"
        });
    }
};
