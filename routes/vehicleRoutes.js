import express from "express";
import {
  upsertVehicle,
  deleteVehicle,
  getAllVehicles,
  getVehicleById
} from "../controllers/vehicleController.js";

const router = express.Router();

/**
 * @swagger
 * /api/vehical/upsert:
 *   post:
 *     summary: Insert or Update Vehicle (Seller)
 *     tags: [Seller - Vehicle]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vehicleId:
 *                 type: integer
 *                 example: 1
 *               agencyId:
 *                 type: integer
 *                 example: 2
 *               brand:
 *                 type: string
 *                 example: Honda
 *               model:
 *                 type: string
 *                 example: Shine
 *               price:
 *                 type: number
 *                 example: 65000
 *     responses:
 *       200:
 *         description: Vehicle insert/update successful
 */
router.post("/bikes/upsert", upsertVehicle);

/**
 * @swagger
 * /api/vehical/delete/{id}:
 *   delete:
 *     summary: Delete Vehicle (Seller)
 *     tags: [Seller - Vehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Vehicle deleted successfully
 */
router.delete("/bikes/delete/:id", deleteVehicle);

/**
 * @swagger
 * /api/vehical/get-all:
 *   get:
 *     summary: Get All Vehicles (Seller)
 *     tags: [Seller - Vehicle]
 *     responses:
 *       200:
 *         description: Vehicles fetched successfully
 */
router.get("/bikes/get-all", getAllVehicles);

/**
 * @swagger
 * /api/bikes/get/{id}:
 *   get:
 *     summary: Get Vehicle by ID (Seller)
 *     tags: [Seller - Vehicle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Vehicle fetched successfully
 */
router.get("/bikes/get/:id", getVehicleById);





// api for buyer


/**
 * @swagger
 * /api/get-all:
 *   get:
 *     summary: Get All Vehicles (Buyer)
 *     tags: [Buyer - Vehicle]
 *     responses:
 *       200:
 *         description: All vehicles list fetched
 */
router.get("/get-all", getAllVehicles);

/**
 * @swagger
 * /api/get/{id}:
 *   get:
 *     summary: Get Single Vehicle by ID (Buyer)
 *     tags: [Buyer - Vehicle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Single vehicle fetched successfully
 */
router.get("/get/:id", getVehicleById);

export default router;