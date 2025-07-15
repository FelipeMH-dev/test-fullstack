import request from "supertest";
import app from "@app";

const API_KEY = process.env.API_KEY ?? "";
const CUSTOM_HEADER = process.env.CUSTOM_HEADER ?? "";

describe("GET /api/items", () => {
  
  it("debe retornar todos los ítems", async () => {
    const res = await request(app)
      .get("/api/items")
      .set("x-api-key", API_KEY)
      .set("x-custom-header", CUSTOM_HEADER);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("debe retornar un ítem específico por ID", async () => {
    const res = await request(app)
      .get("/api/items/1")
      .set("x-api-key", API_KEY)
      .set("x-custom-header", CUSTOM_HEADER);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it("debe retornar 404 si el ítem no existe", async () => {
    const res = await request(app)
      .get("/api/items/999")
      .set("x-api-key", API_KEY)
      .set("x-custom-header", CUSTOM_HEADER);
    expect(res.statusCode).toBe(404);
  });
});
