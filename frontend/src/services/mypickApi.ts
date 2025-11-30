import { baseAxios } from "../axios";

export const listApi = () => baseAxios.get("/mypick/list");
export const keywordApi = () => baseAxios.post(`/mypick/create`);
export const genreMovieApi = () => baseAxios.post(`/mypick/update`);
export const genreApi = () => baseAxios.post("/mypick/delete");