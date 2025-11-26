import styled from 'styled-components'
import type { MovieType } from '../types'

export const MovieContainer = styled.div`
    border: 1px solid blue;
    width: fit-content;
    cursor: pointer;
`

export const Movie = ({movie} : {movie : MovieType}) => {
  return (
    <MovieContainer>
        <img src={movie.imgUrl} width={"200px"} />
        <p>{movie.title}</p>
    </MovieContainer>
  )
}
