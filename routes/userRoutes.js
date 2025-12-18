// /**
//  * @swagger
//  * /api/users/register:
//  *   post:
//  *     summary: Register a new user
//  *     description: Create a new user account for BikeBuyer platform
//  *     tags:
//  *       - Users
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - name
//  *               - email
//  *               - password
//  *               - role
//  *             properties:
//  *               name:
//  *                 type: string
//  *                 example: Shiv Kumar
//  *               email:
//  *                 type: string
//  *                 example: shiv@gmail.com
//  *               password:
//  *                 type: string
//  *                 example: Test@123
//  *               role:
//  *                 type: string
//  *                 enum: [buyer, seller]
//  *                 example: buyer
//  *     responses:
//  *       201:
//  *         description: User registered successfully
//  *       400:
//  *         description: Validation error
//  *       500:
//  *         description: Server error
//  */
