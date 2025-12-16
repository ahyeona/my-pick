import type { MovieType } from '../../types'
import { useState } from 'react'
import MovieModal from '../MovieModal/MovieModal'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { CaptionStyle, MovieListContainer } from './MovieList.style'
import { Movie } from '../Movie/Movie'

const MovieList = ({ movies, caption }: { movies: MovieType[], caption: string }) => {
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);

    const user = useAuthStore().user;
    const nav = useNavigate();

    const movieClick = (movie: MovieType) => {
        if (!user) {
            nav("/login");
        }
        setSelectedMovie(movie);
    }

    return (
        <>
            <CaptionStyle>{caption}</CaptionStyle>
            <MovieListContainer>
                {movies.map((movie: MovieType) => {
                    return <Movie movie={movie} onClick={(movie) => { movieClick(movie) }} />
                })}
            </MovieListContainer>

            {
                selectedMovie && (
                    <MovieModal movie={selectedMovie} onClose={() => { setSelectedMovie(null) }} />
                )
            }
        </>

    )
}

export default MovieList