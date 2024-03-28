const Station = require("../Models/station");

exports.getstaioninfo = async (req, res) => {
    try {
        const stationinfo = await Station.find();
        res.json({
            message: "Successfully fetched info",
            stationinfo: stationinfo
        });
    } catch (err) {
        res.status(500).json({
            error: "Error while fetching station info"
        });
    }
};
