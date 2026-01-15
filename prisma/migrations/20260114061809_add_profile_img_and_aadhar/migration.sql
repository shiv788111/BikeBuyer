/*
  Warnings:

  - The `status` column on the `Vehicle` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `aadharCard` to the `Agency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImg` to the `Agency` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `condition` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "VehicleStatus" AS ENUM ('available', 'sold', 'inactive');

-- CreateEnum
CREATE TYPE "VehicleCondition" AS ENUM ('Excellent', 'Good', 'Average');

-- AlterTable
ALTER TABLE "Agency" ADD COLUMN     "aadharCard" TEXT NOT NULL,
ADD COLUMN     "profileImg" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "condition",
ADD COLUMN     "condition" "VehicleCondition" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "VehicleStatus" NOT NULL DEFAULT 'available';

-- DropEnum
DROP TYPE "BikeCondition";

-- DropEnum
DROP TYPE "BikeStatus";
