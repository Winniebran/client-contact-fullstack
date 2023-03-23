import { DataSource } from "typeorm";
import appDataSource from "../../data-source";
import request from "supertest";
import { app } from "../../app";
import { mockClient, mockClient2 } from "../mocks/clients.mocks";

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

  // POST /client

  test("POST /client - Must be able to create a client", async () => {
    const res = await request(app).post("/client").send(mockClient2);
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
    expect(res.body.email).toEqual("cliente2@mail.com");
    expect(res.body.cellPhone).toEqual("(71) 97777-7777");
    expect(res.status).toBe(201);
  });

  test("POST /client - Shouldn't be able to create a client that already exists", async () => {
    const res = await request(app).post("/client").send(mockClient);
    expect(res.status).toBe(409);
    expect(res.body).toHaveProperty("message");
  });

  // DELETE /client/:id

  test("DELETE /client/:id - Must be able to soft delete client", async () => {
    const clientTobeDeleted = await request(app).get("/client");
    const res = await request(app).delete(
      `/client/${clientTobeDeleted.body[1].id}`
    );
    const findClient = await request(app).get("/client");

    expect(res.status).toBe(204);
    expect(findClient.body[1].isActive).toBe(false);
  });

  test("DELETE /client/:id - Shouldn't be able to delete client with isActive = false", async () => {
    const clientTobeDeleted = await request(app).get("/client");
    const res = await request(app).delete(
      `/client/${clientTobeDeleted.body[1].id}`
    );

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  test("DELETE /client/:id - Shouldn't be able to delete client with invalid id", async () => {
    const res = await request(app).delete(`/client/1`);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
  });

  // UPDATE /client/:id

  test("PATCH /client/:id - Shouldn't be able to update client with invalid id", async () => {
    const valuesToBeUpdated = {
      email: "daniel@mail.com",
      cellPhone: "(71) 99356-7253",
    };
    const res = await request(app).patch(`/client/1`).send(valuesToBeUpdated);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
  });

  test("PATCH /client/:id - Shouldn't be able to update isActive field value", async () => {
    const clientToBeUpdated = await request(app).get("/client");
    const valuesToBeUpdated = { isActive: false };
    const res = await request(app)
      .patch(`/client/${clientToBeUpdated.body[0].id}`)
      .send(valuesToBeUpdated);
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  test("PATCH /client/:id - Shouldn't be able to update id field value", async () => {
    const clientToBeUpdated = await request(app).get("/client");
    const valuesToBeUpdated = { id: 1 };
    const res = await request(app)
      .patch(`/client/${clientToBeUpdated.body[0].id}`)
      .send(valuesToBeUpdated);
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  test("PATCH /client/:id - Should be able to update itself and another client", async () => {
    const clientToBeUpdated = await request(app).get("/client");
    const valuesToBeUpdated = {
      email: "daniel@mail.com",
      cellPhone: "(71) 99356-7253",
    };
    const res = await request(app)
      .patch(`/client/${clientToBeUpdated.body[0].id}`)
      .send(valuesToBeUpdated);

    const updatedClient = await request(app).get("/client");
    expect(res.status).toBe(200);
    expect(updatedClient.body[0].email).toEqual("daniel@mail.com");
    expect(updatedClient.body[0].cellPhone).toEqual("(71) 99356-7253");
    expect(updatedClient.body[0]).not.toHaveProperty("password");
  });
});
