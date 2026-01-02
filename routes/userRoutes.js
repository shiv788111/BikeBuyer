import express from "express";
// import { register, login ,getProfile,logout} from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: User Register
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *                 example: Shiv Kumar
 *               email:
 *                 type: string
 *                 example: shiv@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               role:
 *                 type: string
 *                 example: buyer
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
// router.post("/register", register);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User Login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: shiv@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
// router.post("/login", login);



/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Get Logged-in User Profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 64fd123abc
 *                 name:
 *                   type: string
 *                   example: Shiv Kumar
 *                 email:
 *                   type: string
 *                   example: shiv@gmail.com
 *                 role:
 *                   type: string
 *                   example: buyer
 *       401:
 *         description: Unauthorized
 */
// router.get("/profile", getProfile);



/**
 * @swagger
 * /api/user/logout:
 *   post:
 *     summary: User Logout
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Logout successful
 *       401:
 *         description: Unauthorized
 */
// router.post("/logout", logout);



export default router;
