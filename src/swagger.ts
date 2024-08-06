import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  return createSwaggerSpec({
    apiFolder: "src/app/(main)/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "NYP Technopreneurship Club",
        version: "1.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [],
    },
  });
};