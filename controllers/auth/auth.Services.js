// import prisma from "../prisma/client.js";
// import bcrypt from "bcrypt";

// /**
//  * SIGNUP SERVICE
//  * - Email check
//  * - Password hash
//  * - User create
//  */
// export const signupUser = async ({ name, email, password, role }) => {

//   // 1️⃣ Check email already exist
//   const existingUser = await prisma.user.findUnique({
//     where: { email }
//   });

//   if (existingUser) {
//     throw new Error("Email already registered");
//   }

//   // 2️⃣ Password hash
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // 3️⃣ User create
//   const user = await prisma.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//       role
//     }
//   });

//   return user;
// };

// /**
//  * LOGIN SERVICE
//  * - Email find
//  * - Password match
//  */
// export const loginUser = async (email, password) => {

//   const user = await prisma.user.findUnique({
//     where: { email }
//   });

//   if (!user) return null;

//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) return null;

//   return user;
// };
