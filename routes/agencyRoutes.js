import { Router } from "express";
const router=Router();


/**
 * @swagger
 * /api/agency:
 *   post:
 *     summary: Create or Update Agency (Upsert)
 *     tags: [Agency]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ownerName
 *               - phone
 *               - address
 *               - city
 *               - state
 *               - pincode
 *             properties:
 *               shopName:
 *                 type: string
 *                 example: Bikes
 *               ownerName:
 *                 type: string
 *                 example: all is well
 *               phone:
 *                 type: string
 *                 example: 9876543210
 *               address:
 *                 type: string
 *                 example: MG Road
 *               city:
 *                 type: string
 *                 example: Lucknow
 *               state:
 *                 type: string
 *                 example: UP
 *               pincode:
 *                 type: string
 *                 example: 226001
 *     responses:
 *       201:
 *         description: Agency created/updated successfully
 *       400:
 *         description: Validation error
 */
// router.post("/upsert/:id", upsertAgency);

/**
 * @swagger
 * /api/agency/{id}:
 *   get:
 *     summary: Get Agency by ID
 *     tags: [Agency]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Agency fetched successfully
 *       404:
 *         description: Agency not found
 */
// router.get("/:id", getAgencyById);

/**
 * @swagger
 * /api/agency/user/{userId}:
 *   get:
 *     summary: Get Seller's Agency by User ID
 *     tags: [Agency]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10
 *     responses:
 *       200:
 *         description: Agency fetched successfully
 *       404:
 *         description: Agency not found
 */
// router.get("/user/:userId", getAgencyByUser);



/**
 * @swagger
 * /api/agency/{id}:
 *   delete:
 *     summary: Delete Agency by ID 
 *     tags: [Agency]
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
 *         description: Agency deleted successfully
 *       404:
 *         description: Agency not found
 */
// router.delete("/:id", deleteAgency);






export default router;