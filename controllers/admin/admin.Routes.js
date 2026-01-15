import express from "express";
import {deleteAgencyById, getAllVehicles, getRegisteredAgencies } from "./admin.Controller.js";
import authentication from "../../middlewares/authentication.js";
import checkRole from "../../middlewares/checkRole.js";

const router = express.Router();

//=======Get all agency====================
router.get("/getRegisteredAgencies",authentication,checkRole(["admin"]),getRegisteredAgencies);

//===== delete agency======================
router.delete("/deleteAgency/:agencyId",authentication, checkRole(["amdin"]),deleteAgencyById);

//===========get all listed vehicle========
router.get("/vehicles",getAllVehicles);
export default router;
