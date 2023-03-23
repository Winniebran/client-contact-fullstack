import { DataSource } from "typeorm";
import appDataSource from "../../data-source";
import request from "supertest";
import { app } from "../../app";
import { mockContact, mockContact2 } from "../mocks/contacts.mocks";
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

  // GET /contacts

  test("GET /contacts - Must be able to list contacts", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const res = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).not.toHaveProperty("password");
  });

  test("GET /contacts - Shouldn't be able to list contacts without authentication", async () => {
    const res = await request(app).get("/contacts");
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  // DELETE /contacts/:id

  test("DELETE /contacts/:id - Shouldn't be able to delete contact without authentication", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const contactTobeDeleted = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    const res = await request(app).delete(
      `/contacts/${contactTobeDeleted.body[0].id}`
    );
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  test("DELETE /contacts/:id - Must be able to delete contact", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(mockContact2);
    const contactTobeDeleted = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    const res = await request(app)
      .delete(`/contacts/${contactTobeDeleted.body[1].id}`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    console.log(contactTobeDeleted);

    expect(res.status).toBe(204);
  });

  test("DELETE /contacts/:id - Shouldn't be able to delete contact with invalid id", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const res = await request(app)
      .delete(`/contacts/1`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
  });

  // UPDATE /contacts/:id

  test("PATCH /contacts/:id - Shouldn't be able to update contact without authentication", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const updatedContact = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    const res = await request(app).patch(
      `/contacts/${updatedContact.body[0].id}`
    );
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  test("PATCH /contacts/:id - Shouldn't be able to update contact with invalid id", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const valuesToBeUpdated = {
      email: "marcia@mail.com",
      cellPhone: "(71) 91111-1111",
    };
    const res = await request(app)
      .patch(`/contacts/1`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(valuesToBeUpdated);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
  });

  test("PATCH /contacts/:id - Shouldn't be able to update id field value", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const contactToBeUpdated = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    const valuesToBeUpdated = { id: 1 };
    const res = await request(app)
      .patch(`/contacts/${contactToBeUpdated.body[0].id}`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(valuesToBeUpdated);
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  test("PATCH /contacts/:id - Should be able to update a contact", async () => {
    const clientLogin = await request(app).post("/login").send(mockClient);
    const contactToBeUpdated = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    const valuesToBeUpdated = {
      email: "marcia@mail.com",
      cellPhone: "(71) 91111-1111",
    };
    const res = await request(app)
      .patch(`/contacts/${contactToBeUpdated.body[0].id}`)
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(valuesToBeUpdated);

    const updatedContact = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);
    expect(res.status).toBe(200);
    expect(updatedContact.body[0].email).toEqual("marcia@mail.com");
    expect(updatedContact.body[0].cellPhone).toEqual("(71) 91111-1111");
  });
});
