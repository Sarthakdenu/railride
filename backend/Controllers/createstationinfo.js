const Station = require("../Models/station");

exports.createstationinfo = async (req, res) => {
    try {
        const { name, arrival, departure } = req.body;
        const newstation = new Station({
            name: name,
        });
        const stationinfo = await newstation.save();
        res.json({
            message: "Successfully created station info",
            stationinfo: stationinfo
        });
    } catch (err) {
        return res.status(500).json({
            error: "Error while creating station"
        });
    }
};
