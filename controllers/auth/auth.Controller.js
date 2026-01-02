// 📌 AUTH KYA KARTA HAI?

// Login

// Signup

// Role decide (Admin / Seller / Buyer)




// import * as authService from "./auth.service.js";

// /**
//  * SIGNUP CONTROLLER
//  * - req.body se data lena
//  * - service ko bhejna
//  */
// export const signup = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const user = await authService.signupUser({
//       name,
//       email,
//       password,
//       role
//     });

//     res.status(201).json({
//       success: true,
//       message: "Signup successful",
//       user
//     });

//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// /**
//  * LOGIN CONTROLLER
//  * - email/password check
//  * - role ke hisaab se redirect
//  */
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await authService.loginUser(email, password);

//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid credentials"
//       });
//     }

//     // 🔥 ROLE BASED RESPONSE
//     if (user.role === "ADMIN") {
//       return res.redirect("/admin/dashboard");
//     }

//     if (user.role === "SELLER") {
//       return res.redirect("/seller/dashboard");
//     }

//     if (user.role === "BUYER") {
//       return res.redirect("/buyer/home");
//     }

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
