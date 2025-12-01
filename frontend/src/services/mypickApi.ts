import { baseAxios } from "../axios";
import type { MypickType } from "../types";

interface MypickProps {
    mypick_id:number;
    is_watched:boolean;
    memo:string;
}


export const getMypickApi = () => baseAxios.get("/mypick/list");
export const getMypicDetailkApi = (movie_id:number) => baseAxios.post("/mypick/detail", movie_id);
export const addMypickApi = (data : MypickType) => baseAxios.post(`/mypick/create`, data);
export const updateMypickApi = (data : MypickProps) => baseAxios.post(`/mypick/update`, data);
export const deleteMypickApi = (mypick_id : number) => baseAxios.post("/mypick/delete", mypick_id);