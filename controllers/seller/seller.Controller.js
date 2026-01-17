import {
  createAgencyService,
  getAgencyByUserService,
  createVehicleService,
  updateAgencyService,
  updateVehicleService,
} from "./seller.Services.js";

// ================= CREATE AGENCY =================
export const createAgency = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { shopName, ownerName, phone, address, city, state, pincode } =
      req.body;

    if (!ownerName || !phone || !address || !city || !state || !pincode) {
      return res.status(400).json({
        success: false,
        message: "All fields required ",
      });
    }

    const profileImg = req.files?.profileImg?.[0]?.filename || null;
    const aadharCard = req.files?.aadharCard?.[0]?.filename || null;

    const profileImgUrl = profileImg
      ? `${req.protocol}://${req.get("host")}/uploads/${profileImg}`
      : null;

    const aadharCardUrl = aadharCard
      ? `${req.protocol}://${req.get("host")}/uploads/${aadharCard}`
      : null;

    const agency = await createAgencyService({
      userId,
      shopName,
      ownerName,
      phone,
      address,
      city,
      state,
      pincode,
      profileImg: profileImgUrl,
      aadharCard: aadharCardUrl,
    });

    res.status(201).json({
      success: true,
      message: "Agency created successfully",
      agency,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// ================= GET AGENCY =================
export const getAgencyByUser = async (req, res) => {
  try {
    const userId = req.user.userId;

    const agency = await getAgencyByUserService(userId);

    res.status(200).json({
      success: true,
      agency,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

// ================= CREATE VEHICLE =================
export const createVehicle = async (req, res) => {
  try {
    const userId = req.user.userId;

    const {
      brand,
      model,
      year,
      price,
      kmDriven,
      condition,
      vehicleType,
      description,
    } = req.body;
    console.log(req.body);

    if (
      !brand ||
      !model ||
      !year ||
      !price ||
      !kmDriven ||
      !condition ||
      !vehicleType
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const images = req.files
      ? req.files.map(
          (file) =>
            `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
        )
      : [];

    const vehicle = await createVehicleService({
      userId,
      brand,
      model,
      year: Number(year),
      price: Number(price),
      kmDriven: Number(kmDriven),
      condition,
      vehicleType,
      description,
      images,
    });

    res.status(201).json({
      success: true,
      message: "Vehicle created successfully",
      vehicle,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// ================= UPDATE AGENCY =================
export const updateAgency = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { shopName, ownerName, phone, address, city, state, pincode } =
      req.body;

    const profileImg = req.files?.profileImg?.[0]?.filename;
    const aadharCard = req.files?.aadharCard?.[0]?.filename;

    const profileImgUrl = profileImg
      ? `${req.protocol}://${req.get("host")}/uploads/${profileImg}`
      : undefined;

    const aadharCardUrl = aadharCard
      ? `${req.protocol}://${req.get("host")}/uploads/${aadharCard}`
      : undefined;

    const agency = await updateAgencyService({
      userId,
      shopName,
      ownerName,
      phone,
      address,
      city,
      state,
      pincode,
      profileImg: profileImgUrl,
      aadharCard: aadharCardUrl,
    });

    res.status(200).json({
      success: true,
      message: "Agency updated successfully",
      agency,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// ================= UPDATE VEHICLE =================
export const updateMyVehicle = async (req, res) => {
  try {
    const userId = req.user.userId;

    const {
      brand,
      model,
      year,
      price,
      kmDriven,
      condition,
      status,
      vehicleType,
      description,
    } = req.body || {};

    const files = req.files || [];

    const imageUrls = files.map(
      (file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
    );

    const vehicle = await updateVehicleService({
      userId,
      brand,
      model,
      year: year ? Number(year) : undefined,
      price: price ? Number(price) : undefined,
      kmDriven: kmDriven ? Number(kmDriven) : undefined,
      condition,
      status,
      vehicleType,
      description,
      images: imageUrls,
    });

    res.status(200).json({
      success: true,
      message: "Vehicle updated successfully",
      vehicle,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
