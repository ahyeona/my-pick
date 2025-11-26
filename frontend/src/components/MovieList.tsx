import styled from 'styled-components'
import type { MovieType } from '../types'
import { Movie, MovieContainer } from './Movie'

const MovieListContainer = styled.div`
    border: 1px solid blue;
    width: 100vw;
    overflow: scroll;

    /* &>div {
        
    } */

    & ${MovieContainer} {
        background-color: aliceblue;
        margin-inline: 20px;
    }
`
const CaptionStyle = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
`

const MovieList = ({movies, caption} : {movies : MovieType[], caption : string}) => {
  return (
    <MovieListContainer>
        <CaptionStyle>{caption}</CaptionStyle>
        <div style={{"display":'flex'}}>
            {movies.map((movie : MovieType) => {
                return <Movie movie={movie} />
            })}
        </div>
    </MovieListContainer>
  )
}

export default MovieList