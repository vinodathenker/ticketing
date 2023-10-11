import request from "supertest";
import { app } from "../../app";

it("fails when a email that  does not exist in supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@testc.com",
      password: "password",
    })
    .expect(400);
});
