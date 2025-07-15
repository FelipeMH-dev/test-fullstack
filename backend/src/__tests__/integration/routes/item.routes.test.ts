import request from "supertest";
import app from "@app";

describe("GET /api/items", () => {
  it("debe retornar todos los ítems", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("debe retornar un ítem específico por ID", async () => {
    const res = await request(app).get("/api/items/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it("debe retornar 404 si el ítem no existe", async () => {
    const res = await request(app).get("/api/items/999");
    expect(res.statusCode).toBe(404);
  });
});
