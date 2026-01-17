import { getBuyerRequestsService, requestBikeService } from "./buyer.Services.js";


//===============request create================

export const requestBike = async (req, res) => {
  try {
    const buyerId = req.user.userId;
    const { vehicleId, message } = req.body;

    //Once the seller ID is available, we will use it here.
    //  const { vehicleId, message ,sellerId } = req.body;





    const data = await requestBikeService(
      buyerId,
      Number(vehicleId),
      //  Number(sellerId),//Once the seller ID is available, we will use it here.
      message
    );

    res.json({
      success: true,
      message:"Request send successfully !",
      data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};


//===========get request===========

export const getBuyerRequests = async (req, res) => {
  try {
    const buyerId = req.user.userId;

    const data = await getBuyerRequestsService(buyerId);

    res.json({
      success: true,
      data
    });

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};