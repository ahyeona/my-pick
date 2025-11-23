import { Router } from "express";
import { loginController, signupController, refreshController } from "../controllers/authController";

export const authRouter = Router();

authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);
authRouter.post("/refresh", refreshController);