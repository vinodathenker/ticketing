import { response } from "express";
import request from "supertest";
import { app } from "../../app";

it("return a 201 on successfull signup", async () => {
  return await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("return a 400 with invalid email", async () => {
  return await request(app)
    .post("/api/users/signup")
    .send({
      email: "12132423435",
      password: "paswword",
    })
    .expect(400);
});

it("retrun a 400 with missing email and passord", async () => {
  return await request(app).post("/api/users/signup").send({}).expect(400);
});

it("disallow duplicate email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("set a cookie after successful signup", async () => {
  const response: any = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
