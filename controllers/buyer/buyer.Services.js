import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const requestBikeService = async (buyerId, vehicleId, message) => {
  const vehicle = await prisma.vehicle.findUnique({
    where: { vehicleId },
    include: { agency: true },
  });

  const sellerId = vehicle.agency.userId;

  return await prisma.requestQuery.create({
    data: {
      buyerId,
      sellerId,
      vehicleId,
      message,
    },
  });
};



//============get request===================



export const getBuyerRequestsService = async (buyerId) => {
  return await prisma.requestQuery.findMany({
    where: { buyerId },

    select: {
      requestId: true,
      status: true,
      message: true,
      createdAt: true,

      vehicle: {
        select: {
          vehicleId: true,
          brand: true,
          model: true,
          price: true,
          year: true,
          kmDriven: true,
          vehicleType: true,
          description: true
        }
      },

      seller: {
        select: {
          userId: true,
          name: true,
          email: true
        }
      }
    }
  });
};

