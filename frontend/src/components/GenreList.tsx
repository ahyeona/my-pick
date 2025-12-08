import styled from "styled-components"
import type { GenreType } from "../types"
import Genre from "./Genre"
import type { Dispatch, SetStateAction } from "react"

const GenreListContainer = styled.div`
  overflow: scroll;
  width: 100vw;
`
type GenreListProps = {
  genres: GenreType[];
  setGenre: Dispatch<SetStateAction<GenreType>>;
}

const GenreList = ({ genres, setGenre }: GenreListProps) => {
  return (
    <GenreListContainer>
      <div style={{ "display": 'flex' }}>
        {genres.map((genre: GenreType, idx: number) => {
          return <Genre genre={genre} setGenre={setGenre} key={idx} />
        })}
      </div>
    </GenreListContainer>
  )
}

export default GenreList