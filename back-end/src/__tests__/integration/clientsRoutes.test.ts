import { DataSource } from "typeorm";
import appDataSource from "../../data-source";
import request from "supertest";
import { app } from "../../app";
import { mockClient, mockClientLogin } from "../mocks/clients.mocks";

describe("/client", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await appDataSource
      .initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  // GET /client

  test("GET /client - Must be able to list clients", async () => {
    await request(app).post("/client").send(mockClient);
    const res = await request(app).get("/client");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).not.toHaveProperty("password");
  });

  // GET /client/:id

  test("GET /client/:id - Must be able to list one client", async () => {
    const client = await request(app).get("/client").send(mockClient);
    const res = await request(app).get(`/client/${client.body[0].id}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("firstName");
    expect(res.body).toHaveProperty("lastName");
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("cellPhone");
    expect(res.body).toHaveProperty("isActive");
    expect(res.body).toHaveProperty("createdAt");
    expect(res.body).toHaveProperty("updatedAt");
    expect(res.body).toHaveProperty("deletedAt");
    expect(res.body).not.toHaveProperty("password");
  });

  test("GET /client/:id - Shouldn't be able to list one client with invalid id", async () => {
    const res = await request(app).get(`/client/1`);

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
  });
});
