import { Response } from "express";
import { mypickCreateService, mypickDeleteService, mypickDetailService, mypickListService, mypickUpdateService } from "../services/mypickService";
import { RequestWithUser } from "../types/express";
import { CreateMypickDTO, UpdateMypickDTO } from "../dtos/mypick.dto";

export const mypickListController = async (req: RequestWithUser, res: Response) => {
    try {
        const user_id = req.user as number;
        const data = await mypickListService(user_id);

        res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const mypickDetailController = async (req: RequestWithUser, res: Response) => {
    try {
        const user_id = req.user as number;
        const { movie_id } = req.body
        const data = await mypickDetailService(user_id, movie_id);

        res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const mypickCreateController = async (req: RequestWithUser, res: Response) => {
    try {
        const user_id = req.user as number;
        const dto: CreateMypickDTO = { user_id, ...req.body };

        const result = await mypickCreateService(dto);

        res.status(200).json({ result });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const mypickUpdateController = async (req: RequestWithUser, res: Response) => {
    try {
        const dto: UpdateMypickDTO = { ...req.body };
        const result = await mypickUpdateService(dto);
        // const { mypick_id, is_watched, memo } = req.body;
        // const result = await mypickUpdateService(mypick_id, is_watched, memo);

        res.status(200).json({ result });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }

}

export const mypickDeleteController = async (req: RequestWithUser, res: Response) => {
    try {
        const { mypick_id } = req.body;
        const data = await mypickDeleteService(mypick_id);

        res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

