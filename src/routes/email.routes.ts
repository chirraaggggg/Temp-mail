import { Router } from "express";
import { createTempEmail } from "../controllers/email.controller.js";

const router = Router();

router.post("/email", createTempEmail);

export default router;