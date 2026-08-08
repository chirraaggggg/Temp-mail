import type { Request, Response } from "express";
import { generateTempEmail } from "../services/email.service.js";

export const createTempEmail = (req: Request, res: Response) => {
  const email = generateTempEmail();

  return res.status(201).json({
    success: true,
    email,
  });
};