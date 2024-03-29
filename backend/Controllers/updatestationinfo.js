const Station = require("../Models/station");
const Train = require("../Models/train");

exports.updateStationInfo = async (req, res) => {
    try {
        const { station1, station2, trainid , arrival , departure} = req.body;
        const traindetail = await Train.findOne({ trainid: trainid });
        console.log("hello updatestation")
        if (!traindetail) {
            return res.status(404).json({ error: "Train not found" });
        }

        const train = await Train.findByIdAndUpdate(traindetail._id,
            { $push:  {stations: { from: station1, to: station2, arrival: arrival , departure: departure }} },
            { new: true }
        );
        console.log(train)
        res.status(200).json({
            success: true,
            message: "Successfully updated train with station info",
            train: train
        });
    } catch (err) {
        console.error("Error while updating station info:", err);
        res.status(500).json({
            success: false,
            error: "Error while updating station info"
        });
    }
};
