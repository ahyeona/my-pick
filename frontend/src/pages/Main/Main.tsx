import { useEffect, useState } from 'react'
import { Button, GenreList, Loading, MovieList, SearchBar } from '../../components'
import { genreApi, genreMovieApi, keywordApi, popularApi } from '../../services/mainApi'
import type { MovieType, GenreType } from '../../types'
import { MainContainer } from './Main.style'

const Main = () => {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState<GenreType>({ id: 0, name: "" });
  const [genreList, setGenreList] = useState([]);
  const [keywordMovies, setKeywordMovies] = useState<MovieType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [genreMovies, setGenreMovies] = useState<MovieType[]>([]);

  const [popularPage, setPopularPage] = useState(1);
  const [keywordPage, setKeywordPage] = useState(1);
  const [genrePage, setGenrePage] = useState(1);

  const [mode, setMode] = useState<"popular" | "keyword" | "genre">("popular");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getPopularMovies = async (pageNo: number) => {
    setLoading(true);
    const { data } = await popularApi(pageNo);
    const movies = data?.data || [];

    if (pageNo === 1 && movies.length === 0) {
      alert("데이터가 없습니다.");
      setPopularMovies([]);
      setHasMore(false);
      setLoading(false);
      return;
    }

    if (pageNo === 1) {
      setPopularMovies(movies);
    } else {
      setPopularMovies([...popularMovies, ...movies]);
    }

    setHasMore(movies.length > 0);

    setMode("popular");
    setLoading(false);
  };

  const getKeywordMovies = async (pageNo: number) => {
    if (!keyword.trim()) {
      alert("검색어를 입력하세요.");
      return;
    }
    setLoading(true);
    const { data } = await keywordApi(keyword, pageNo);
    const movies = data?.data || [];

    if (pageNo === 1 && movies.length === 0) {
      alert("검색 결과가 없습니다.");
      setKeywordMovies([]);
      setHasMore(false);
      setLoading(false);
      return;
    }

    if (pageNo === 1) {
      setKeywordMovies(movies);
    } else {
      setKeywordMovies([...keywordMovies, ...movies]);
    }

    setHasMore(movies.length > 0);

    setMode("keyword");
    setLoading(false);
  };

  const getGenreMovies = async (pageNo: number) => {
    if (!genre.id) return;
    setLoading(true);
    const { data } = await genreMovieApi(genre.id, pageNo);
    const movies = data?.data || [];

    if (pageNo === 1 && movies.length === 0) {
      alert("해당 장르의 영화가 없습니다.");
      setGenreMovies([]);
      setHasMore(false);
      setLoading(false);
      return;
    }

    if (pageNo === 1) {
      setGenreMovies(movies);
    } else {
      setGenreMovies([...genreMovies, ...movies]);
    }

    setHasMore(movies.length > 0);

    setMode("genre");
    setLoading(false);
  };

  const getGenres = async () => {
    const { data } = await genreApi();
    setGenreList(data?.data?.genres || []);
  }

  const loadMore = () => {
    const pageNo = mode === "popular" ? popularPage + 1 : mode === "keyword" ? keywordPage + 1 : genrePage + 1;

    if (mode === "popular") {
      getPopularMovies(pageNo);
      setPopularPage(pageNo);
      setGenrePage(1);
      setKeywordPage(1);
      setKeyword("");
    }
    if (mode === "keyword") {
      getKeywordMovies(pageNo);
      setKeywordPage(pageNo);
      setGenrePage(1);
      setPopularPage(1);
    }
    if (mode === "genre") {
      getGenreMovies(pageNo);
      setGenrePage(pageNo);
      setPopularPage(1);
      setKeywordPage(1);
      setKeyword("");
    }
  }

  useEffect(() => {
    setLoading(true);
    getGenres();
    getPopularMovies(popularPage);
  }, [])

  useEffect(() => {
    if (!genre.id) return;
    getGenreMovies(1);
  }, [genre]);

  return (
    <MainContainer>
      <SearchBar onChange={setKeyword} search={() => { getKeywordMovies(1) }} />
      <GenreList genres={genreList} setGenre={setGenre} />

      {loading && <Loading />}

      <MovieList
        caption={
          mode === "popular"
            ? "인기 영화 목록"
            : mode === "keyword"
              ? `${keyword} 검색 결과`
              : `${genre.name} 영화 목록`
        }
        movies={
          mode === "popular"
            ? popularMovies
            : mode === "keyword"
              ? keywordMovies
              : genreMovies
        }
      />

      {!loading && hasMore && (
        <Button onClick={loadMore} text='더보기' />
      )}

      {!loading && !hasMore && (
        <p>목록의 끝입니다.</p>
      )}
    </MainContainer>
  )
}

export default Main