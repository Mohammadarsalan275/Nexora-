import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import AuthRouter from "../routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", AuthRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running successfully",
    status: "ok",
  });
});

export default app;
