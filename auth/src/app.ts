import express from "express";
import { json } from "body-parser";
import cors from "cors";
import "express-async-errors";

import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler, NotFoundError } from "@vacommon/common";

const app = express();
app.set("trust proxy", true);
app.use(cors());
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false, //process.env.NODE_ENV !== "test",
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
