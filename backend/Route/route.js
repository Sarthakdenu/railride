const express  = require("express");
const Router = express.Router();

const {createstationinfo} = require("../Controllers/createstationinfo");
const {getstaioninfo} = require("../Controllers/getstaioninfo");
const {creattraininfo}= require("../Controllers/createtraininfo");
const {updateStationInfo} = require("../Controllers/updatestationinfo");
const {gettraininfo} = require("../Controllers/gettraininfo")
const {createticket} = require("../Controllers/createticket")
const {getticketinfo} = require("../Controllers/getticketinfo")
const {createuserinfo} = require("../Controllers/createuserinfo")
const {getuserinfo} = require("../Controllers/getuderinfo");
const {updateuserinfo} = require("../Controllers/updateuserinfo")

Router.post("/createstationinfo",createstationinfo);
Router.get("/getstaioninfo",getstaioninfo)
Router.post("/creattraininfo",creattraininfo)
Router.put("/updateStationInfo",updateStationInfo)
Router.get("/gettraininfo",gettraininfo)
Router.post("/createticket",createticket);
Router.get("/getticketinfo",getticketinfo)
Router.post("/createuserinfo",createuserinfo)
Router.get("/getuserinfo",getuserinfo)
Router.put("/updateuserinfo",updateuserinfo)
module.exports = Router;