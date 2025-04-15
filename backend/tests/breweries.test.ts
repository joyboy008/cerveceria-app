import request from "supertest";
import app from "../src/index"; // asegúrate de exportar tu app sin listen()

let token: string;

beforeAll(async () => {
  // ✅ Usa un usuario que ya exista en tu base de datos
  const res = await request(app).post("/auth/login").send({
    username: "user",
    password: "1234",
  });

  token = res.body.token;
});

// TEST breweries/all
describe("GET /breweries/all", () => {
  it("debería responder con status 200 y un array de cervecerías", async () => {
    const res = await request(app)
      .get("/breweries/all")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /breweries/all", () => {
  it("debería responder con status 403", async () => {
    const res = await request(app)
      .get("/breweries/all")
      .set("Authorization", `Bearer token-incorrecto`);

    expect(res.statusCode).toBe(403);
    expect(Array.isArray(res.body)).toBe(false);
  });
});

// TEST breweries/state

describe("GET /breweries/state", () => {
  it("debería responder con status 200 y un array de cervecerías de california", async () => {
    const res = await request(app)
      .get("/breweries/state")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("debería responder con status 403 si el token es inválido", async () => {
    const res = await request(app)
      .get("/breweries/state")
      .set("Authorization", `Bearer token-invalido`);

    expect(res.statusCode).toBe(403);
  });
});

//TEST breweires/:id

const breweryId = "5128df48-79fc-4f0f-8b52-d06be54d0cec"; // o uno real del listado

describe("GET /breweries/:id", () => {
  it("debería responder con status 200 y un objeto de cervecería", async () => {
    const res = await request(app)
      .get(`/breweries/${breweryId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
  });

  it("debería responder con status 500 si no hay id correcto ya que el verify si lo cumple", async () => {
    const res = await request(app)
      .get(`/breweries/idincorrecto`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(404);
  });

  it("debería responder con status 403 si el token es inválido", async () => {
    const res = await request(app)
      .get(`/breweries/${breweryId}`)
      .set("Authorization", `Bearer token-invalido`);

    expect(res.statusCode).toBe(403);
  });
});
