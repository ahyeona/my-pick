import { Request, Response } from "express";
import { detailService, genreSearchService, popularSearchService, searchService } from "../services/searchService";

export const keywordSearchController = async (req: Request, res: Response) => {
    try {
        const { keyword, pageNo } = req.query as unknown as { keyword: string, pageNo: number };
        const data = await searchService(keyword, pageNo);

        return res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        return res.status(400).json({ message: error.message });
    }
}

export const popularSearchController = async (req: Request, res: Response) => {
    try {
        const { pageNo } = req.query as unknown as { pageNo: number };
        const data = await popularSearchService(pageNo);

        return res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        return res.status(400).json({ message: error.message });
    }
}

export const genreSearchController = async (req: Request, res: Response) => {
    try {
        const { genres, pageNo } = req.query as unknown as { genres: string, pageNo: number };
        const data = await genreSearchService(genres, pageNo);

        return res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        return res.status(400).json({ message: error.message });
    }
}

export const detailController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await detailService(id);

        return res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        return res.status(400).json({ message: error.message });
    }
}