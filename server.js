import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import prisma from "./config/db.js";
import sellerRoutes from "./controllers/seller/seller.Routes.js"
import adminRoutes from "./controllers/admin/admin.Routes.js"
import requestRoutes from "./routes/requestRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import path from "path"
import { fileURLToPath } from "url";

//login
import userRoutes from "./controllers/users/users.Routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static uploads
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

//  SWAGGER API DOCUMENTATION
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// APIs
app.use("/api/agency", sellerRoutes);

app.use("/api/request", requestRoutes);
app.use("/api/vehicle", vehicleRoutes);
//login
app.use("/api/user", userRoutes);
// admin
app.use("/api/admin",adminRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});
