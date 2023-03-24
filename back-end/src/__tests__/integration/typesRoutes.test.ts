import { DataSource } from "typeorm";
import appDataSource from "../../data-source";
import request from "supertest";
import { app } from "../../app";
import { mockClient } from "../mocks/clients.mocks";
import { mockType } from "../mocks/types.mocks";

describe("/type", () => {
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

  // POST /type

  test("POST /type -  Must be able to create type", async () => {
    await request(app).post("/client").send(mockClient);
    const clientLogin = await request(app).post("/login").send(mockClient);
    const res = await request(app)
      .post("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(mockType);

    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("id");
    expect(res.status).toBe(201);
  });

  test("POST /type -  Shouldn't be able to create type that already exists", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const res = await request(app)
      .post("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(mockType);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(409);
  });

  test("POST /type -  Shouldn't be able to create type without authentication", async () => {
    const res = await request(app).post("/type").send(mockType);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  // GET /type

  test("GET /type -  Must be able to list all type", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const res = await request(app)
      .get("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(mockType);

    expect(res.body).toHaveLength(1);
    expect(res.status).toBe(200);
  });

  // PATCH /type/:id

  test("PATCH /type/:id - should be able to update type", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);

    const typeTobeUpdate = await request(app)
      .get("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    const valuesToBeUpdated = { name: "Família" };

    const res = await request(app)
      .patch(`/type/${typeTobeUpdate.body[0].id}`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(valuesToBeUpdated);

    expect(res.status).toBe(200);
    expect(res.body.name).toEqual("Família");
  });

  test("PATCH /type/:id - Shouldn't be able to update type without authentication", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const typeTobeUpdate = await request(app)
      .get("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    const valuesToBeUpdated = { name: "Amigos" };
    const res = await request(app)
      .patch(`/type/${typeTobeUpdate.body[0].id}`)
      .send(valuesToBeUpdated);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("PATCH /type/:id - Shouldn't be able to update with invalid id", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const valuesToBeUpdated = { name: "Amigos" };
    const res = await request(app)
      .patch(`/type/1`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(valuesToBeUpdated);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(404);
  });

  test("PATCH /type/:id - Shouldn't be able to update id field value", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const typeTobeUpdate = await request(app)
      .get("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    const valuesToBeUpdated = { id: "1" };
    const res = await request(app)
      .patch(`/type/${typeTobeUpdate.body[0].id}`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(valuesToBeUpdated);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  // DELETE /type/:id

  test("DELETE /type/:id - Shouldn't be able to delete type without authentication", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const typeTobeDelete = await request(app)
      .get("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    const res = await request(app).delete(`/type/${typeTobeDelete.body[0].id}`);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("DELETE /type/:id - Shouldn't be able to delete with invalid id", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);

    const res = await request(app)
      .delete(`/type/1`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(404);
  });

  test("DELETE /type/:id - should be able to delete type", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const typeTobeDelete = await request(app)
      .get("/type")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    const res = await request(app)
      .delete(`/type/${typeTobeDelete.body[0].id}`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    expect(res.status).toBe(204);
  });
});
