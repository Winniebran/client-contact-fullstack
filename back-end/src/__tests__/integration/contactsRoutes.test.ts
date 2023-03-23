import { DataSource } from "typeorm";
import appDataSource from "../../data-source";
import request from "supertest";
import { app } from "../../app";
import { mockContact } from "../mocks/contacts.mocks";
import { mockClient } from "../mocks/clients.mocks";

describe("/contacts", () => {
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

  // POST /contacts

  test("POST /contacts - Must be able to create a contact", async () => {
    await request(app).post("/client").send(mockClient);
    const clientLogin = await request(app).post("/login").send(mockClient);

    const res = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(mockContact);

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("firstName");
    expect(res.body).toHaveProperty("lastName");
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("cellPhone");
    expect(res.body).toHaveProperty("createdAt");
    expect(res.body).toHaveProperty("updatedAt");

    expect(res.body.email).toEqual("contato1@mail.com");
    expect(res.body.cellPhone).toEqual("(71) 98888-8888");
    expect(res.status).toBe(201);
  });

  test("POST /contacts - Shouldn't be able to create a contact that already exists", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);

    const res = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(mockContact);
      
    expect(res.status).toBe(409);
    expect(res.body).toHaveProperty("message");
  });
});
