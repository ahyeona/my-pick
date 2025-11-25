import { Router } from "express";
import { loginController, signupController, refreshController, profileController } from "../controllers/authController";
import { authMiddleware } from "../middleware/authMiddleware";

export const authRouter = Router();

authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);
authRouter.get("/refresh", refreshController);
authRouter.get("/profile", authMiddleware, profileController);