import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ================= CREATE AGENCY SERVICE =================
export const createAgencyService = async ({
  userId,
  shopName,
  ownerName,
  phone,
  address,
  city,
  state,
  pincode,
  profileImg,
  aadharCard,
}) => {
  const existingAgency = await prisma.agency.findUnique({
    where: { userId },
  });

  if (existingAgency) {
    throw new Error("Agency already exists for this user");
  }

  return await prisma.agency.create({
    data: {
      userId,
      shopName,
      ownerName,
      phone,
      address,
      city,
      state,
      pincode,
      profileImg,
      aadharCard,
    },
  });
};

// ================= GET AGENCY SERVICE =================
export const getAgencyByUserService = async (userId) => {
  const agency = await prisma.agency.findUnique({
    where: { userId },
    include: { vehicles: true },
  });

  if (!agency) {
    throw new Error("Agency not found for this user");
  }

  return agency;
};

// ================= CREATE VEHICLE SERVICE =================
export const createVehicleService = async ({
  userId,
  brand,
  model,
  year,
  price,
  kmDriven,
  condition,
  vehicleType,
  description,
  images,
}) => {
  const agency = await prisma.agency.findUnique({
    where: { userId },
  });

  if (!agency) 
    throw new Error("Agency not found");

  const vehicle = await prisma.vehicle.create({
    data: {
      agencyId: agency.agencyId,
      brand,
      model,
      year,
      price,
      kmDriven,
      condition, // "Excellent" | "Good" | "Average"
      vehicleType, // "BIKE" | "SCOOTY"
      description,
      images: {
        create: images.map((img) => ({
          imageUrl: img,
        })),
      },
    },
    include: {
      images: true,
    },
  });

  return vehicle;
};


// ================= UPDATE AGENCY SERVICE =================
export const updateAgencyService = async ({
  userId,
  shopName,
  ownerName,
  phone,
  address,
  city,
  state,
  pincode,
  profileImg,
  aadharCard,
}) => {
  //  Check agency exists
  const agency = await prisma.agency.findUnique({
    where: { userId },
  });

  if (!agency) {
    throw new Error("Agency not found");
  }

  //  Update
  return await prisma.agency.update({
    where: { agencyId: agency.agencyId },
    data: {
      shopName,
      ownerName,
      phone,
      address,
      city,
      state,
      pincode,
      ...(profileImg && { profileImg }),
      ...(aadharCard && { aadharCard }),
    },
  });
};


// ================= UPDATE VEHICLE SERVICE =================
export const updateVehicleService = async ({
  userId,
  brand,
  model,
  year,
  price,
  kmDriven,
  condition,
  status,
  vehicleType,
  description,
  images,
}) => {
  // 1️⃣ Find agency of logged-in user
  const agency = await prisma.agency.findFirst({
    where: { userId },
    include: {
      vehicles: true,
    },
  });

  if (!agency) {
    throw new Error("Agency not found for this user");
  }

  if (!agency.vehicles.length) {
    throw new Error("No vehicle found for this agency");
  }

  //assuming ONE vehicle per agency
  const vehicleId = agency.vehicles[0].vehicleId;

  //  Update vehicle
  const updatedVehicle = await prisma.vehicle.update({
    where: { vehicleId },
    data: {
      brand,
      model,
      year,
      price,
      kmDriven,
      condition,
      status,
      vehicleType,
      description,
    },
  });

  // Add images if any
  if (images && images.length > 0) {
    await prisma.vehicleImage.createMany({
      data: images.map((url) => ({
        vehicleId,
        imageUrl: url,
      })),
    });
  }

  return updatedVehicle;
};


