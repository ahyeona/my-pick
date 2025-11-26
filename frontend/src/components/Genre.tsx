import styled from "styled-components"
import type { GenreType } from "../types"
import type { Dispatch, SetStateAction } from "react";

const GenreContainer = styled.div`
  width: 140px;
  background-color: gray;
  border-radius: 20%;
  cursor: pointer;
`

type GenreProps = {
  genre : GenreType;
  setGenre : Dispatch<SetStateAction<GenreType>>;
}

const Genre = ({genre, setGenre} : GenreProps) => {
  return (
    <GenreContainer onClick={()=>{setGenre(genre)}}>
      {genre.name}
    </GenreContainer>
  )
}

export default Genre