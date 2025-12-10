import dotenv from "dotenv";

dotenv.config();

export const corsOptions = {
  origin: process.env.FRONT_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};