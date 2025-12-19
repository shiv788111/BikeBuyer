import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import prisma from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import agencyRoutes from "./routes/agencyRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static uploads
app.use("/uploads", express.static("uploads"));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// APIs
app.use("/api/user", userRoutes);
app.use("/api/agency", agencyRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/vehicle", vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});
