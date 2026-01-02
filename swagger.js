import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BikeBuyer",
      version: "1.0.0",
      description: "API documentation for BikeBuyer Website",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // yahan se API comments read honge
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
