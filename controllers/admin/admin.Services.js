import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ==========Get total registered agencies==================

export const getRegisteredAgenciesService = async () => {
  const totalAgencies = await prisma.agency.count({
    where: { deletedAt: null }, // ignore soft deleted agencies
  });

  // fetch detailed list
  const agencies = await prisma.agency.findMany({
    where: { deletedAt: null },
    select: {
      agencyId: true,
      shopName: true,
      ownerName: true,
      phone: true,
      city: true,
      state: true,
      createdAt: true,
      user: { select: { name: true, email: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return { totalAgencies, agencies };
};


// ================= DELETE AGENCY SERVICE =================
export const deleteAgencyByIdService = async (agencyId) => {
  return await prisma.$transaction(async (tx) => {
    //  Check agency
    const agency = await tx.agency.findUnique({
      where: { agencyId },
    });

    if (!agency) {
      throw new Error("Agency not found");
    }

    // Delete vehicle images (via vehicle relation)
    await tx.vehicleImage.deleteMany({
      where: {
        vehicle: {
          agencyId,
        },
      },
    });

    //Delete vehicles
    await tx.vehicle.deleteMany({
      where: { agencyId },
    });

    // Delete agency
    await tx.agency.delete({
      where: { agencyId },
    });

    return true;
  });
};


//================get all vehicle list with seller name=============
export const getAllVehiclesService = async () => {
  const vehicles = await prisma.vehicle.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      images: true,  
      agency: {
        select: {
          agencyId: true,
          shopName: true,
          city: true,
          state: true,
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return vehicles;
};



