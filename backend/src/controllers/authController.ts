import { Request, Response } from "express";
import { loginService, signupService } from "../services/authService";

export const signupController = async (req : Request, res : Response) => {
    try {
        const { email, password } = req.body;
        const user = await signupService(email, password);
        res.status(200).json({ message: "회원가입 성공", user });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const loginController = async (req : Request, res : Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginService(email, password);
        res.status(200).json({ message: "로그인 성공", user });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}