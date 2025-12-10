import styled from "styled-components"
import { GenreContainer } from "../Genre/Genre.style"

export const GenreListContainer = styled.div`
  overflow: scroll;
  width: fit-content;

  & ${GenreContainer} {
    width: 100px;
    margin-inline: 10px;
  }
`