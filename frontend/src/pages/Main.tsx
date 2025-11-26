import { useEffect, useState } from 'react'
import { GenreList, Loading, MovieList, SearchBar } from '../components'
import { genreApi, genreMovieApi, keywordApi, popularApi } from '../services/mainApi'
import type { MovieType, GenreType } from '../types'

const Main = () => {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState<GenreType>({ id:0 , name:"" });
  const [genreList, setGenreList] = useState([]);
  const [keywordMovies, setKeywordMovies] = useState<MovieType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [genreMovies, setGenreMovies] = useState<MovieType[]>([]);

  const getPopularMovies = async () => {
    const { data } = await popularApi();
    setPopularMovies(data.data);
    console.log("data", data);  
  }

  // searchbar에서 엔터 치거나 돋보기버튼 눌렀을때
  const getKeywordMovies = async () => {
    const { data } = await keywordApi(keyword);
    setKeywordMovies(data.data);
    console.log("data", data);  
  }

  const getGenreMovies = async () => {
    if (!genre.id) return;
    const { data } = await genreMovieApi(genre.id);
    setGenreMovies(data.data);
    console.log("data", data);  
  }

  const getGenres = async () => {
    const { data } = await genreApi();
    setGenreList(data.data.genres);
    console.log("data", data.data.genres);  
  }

  useEffect(()=>{
    getGenres();
    getPopularMovies();
  }, [])

  useEffect(()=>{
    if (!genre.id) return;
    console.log("genre", genre);
    getGenreMovies();
  }, [genre]);

  return (
    <>
      <SearchBar onChange={setKeyword} search={()=>{getKeywordMovies()}}/>
      <GenreList genres={genreList} setGenre={setGenre} />
      <MovieList caption={"인기 영화 목록"} movies={popularMovies} />
      <MovieList caption={`${keyword} 검색 결과`} movies={keywordMovies} />
      <MovieList caption={`${genre.name} 영화 목록`} movies={genreMovies} />
    </>
  )
}

export default Main