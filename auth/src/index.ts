import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vinod-dev:Oct%402023@cluster0.ztcvu.azure.mongodb.net/auth?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log(err);
  }

  app.listen(3001, () => {
    console.log("Listening on port 3001!");
  });
};

start();
