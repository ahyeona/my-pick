import { baseAxios } from "../axios";

export const popularApi = (pageNo: number) => baseAxios.get(`/search/popular?pageNo=${pageNo}`);
export const keywordApi = (keyword: string, pageNo: number) => baseAxios.get(`/search/keyword?keyword=${keyword}&pageNo=${pageNo}`);
export const genreMovieApi = (genreId: number, pageNo: number) => baseAxios.get(`/search/genre?genres=${genreId}&pageNo=${pageNo}`);
export const genreApi = () => baseAxios.get("/genres");