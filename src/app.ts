import express from "express";
import cors from "cors";
import morgan from "morgan";
import emailRoutes from "./routes/email.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", emailRoutes);

app.get("/", (req, res) => {
  res.send("TempMail API running 🚀");
});

export default app;