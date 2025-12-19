import express from "express";
import {
  
  getRequestsByBuyer,
  getRequestsBySeller,
  deleteRequest,
  createRequest
} from "../controllers/requestController.js";

const router = express.Router();

/**
 * @swagger
 * /api/request/create:
 *   post:
 *     summary: Create or Update Request (Upsert)
 *     tags: [RequestQuery]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               requestId:
 *                 type: integer
 *                 example: 1  # Optional for update
 *               vehicleId:
 *                 type: integer
 *                 example: 1
 *               buyerId:
 *                 type: integer
 *                 example: 10
 *               sellerId:
 *                 type: integer
 *                 example: 5
 *               message:
 *                 type: string
 *                 example: I want to buy this bike.
 *               status:
 *                 type: string
 *                 example: pending
 *     responses:
 *       201:
 *         description: Request created successfully
 */
router.post("/", createRequest);

/**
 * @swagger
 * /api/request/buyer/{buyerId}:
 *   get:
 *     summary: Get all Requests by Buyer
 *     tags: [RequestQuery]
 *     parameters:
 *       - in: path
 *         name: buyerId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10
 *     responses:
 *       200:
 *         description: Requests fetched successfully
 */
router.get("/buyer/:buyerId", getRequestsByBuyer);

/**
 * @swagger
 * /api/request/seller/{sellerId}:
 *   get:
 *     summary: Get all Requests by Seller
 *     tags: [RequestQuery]
 *     parameters:
 *       - in: path
 *         name: sellerId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 5
 *     responses:
 *       200:
 *         description: Requests fetched successfully
 */
router.get("/seller/:sellerId", getRequestsBySeller);

/**
 * @swagger
 * /api/request/{id}:
 *   delete:
 *     summary: Delete a Request
 *     tags: [RequestQuery]
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
 *         description: Request deleted successfully
 */
router.delete("/:id", deleteRequest);

export default router;
