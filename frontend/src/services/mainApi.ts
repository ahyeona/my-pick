import { baseAxios } from "../axios";

export const popularApi = () => baseAxios.get("/search/popular");
export const keywordApi = (keyword: string) => baseAxios.get(`/search/keyword?keyword=${keyword}`);
export const genreMovieApi = (genreId: number) => baseAxios.get(`/search/genre?genres=${genreId}`);
export const genreApi = () => baseAxios.get("/genres");