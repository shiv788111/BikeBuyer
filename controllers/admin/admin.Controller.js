import {deleteAgencyByIdService,getAllVehiclesService,getRegisteredAgenciesService} from "./admin.Services.js";

//==============get total register agency==============

export const getRegisteredAgencies = async (req, res) => {
  try {
    const data = await getRegisteredAgenciesService();
    res.status(200).json({
      success: true,
      message: "Registered agencies fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};


// ================= DELETE AGENCY =================
export const deleteAgencyById = async (req, res) => {
  try {
    const { agencyId } = req.params;

    await deleteAgencyByIdService(Number(agencyId));

    res.status(200).json({
      success: true,
      message: "Agency, vehicles and images deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

//=================get all vehicle====================
export const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await getAllVehiclesService();

    res.status(200).json({
      success: true,
      totalVehicles: vehicles.length,
      vehicles,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
