import express from "express";
import { getBuyerRequests, requestBike} from "./buyer.Controller.js";
import authentication from "../../middlewares/authentication.js";
const router = express.Router();

//=============request Send for bike===========

router.post("/requestBike",authentication ,requestBike);

//============= get request============================

router.get("/getBuyerRequests",authentication,getBuyerRequests);


export default router;
