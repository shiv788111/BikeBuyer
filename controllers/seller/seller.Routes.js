import express from "express";
import {createAgency,getAgencyByUser,createVehicle, updateAgency, updateMyVehicle} from "./seller.Controller.js";
import authentication from "../../middlewares/authentication.js";
import checkRole from "../../middlewares/checkRole.js";
import { upload } from "../../config/upload.js";

const router = express.Router();

// =========CREATE AGENCY=============== 
router.post("/createAgency",authentication,checkRole(["seller"]),
  upload.fields([
    { name: "profileImg", maxCount: 1 },
    { name: "aadharCard", maxCount: 1 },
  ]),
  createAgency
);

//================GET AGENCY====================
router.get("/getAgencyByUser",authentication,checkRole(["seller"]),getAgencyByUser);

// =================Add  VEHICLE================= 
router.post("/createVehicle",authentication,checkRole(["seller"]),upload.array("images", 5),createVehicle);

//===============update Agency/Shop================

router.put("/update",authentication,checkRole(["seller"]),updateAgency);


//==============Update Vehicle details=============

router.put( "/vehicle/update",authentication,checkRole(["seller"]),upload.array("images", 5),updateMyVehicle);




export default router;
