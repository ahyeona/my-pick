import styled from 'styled-components'
import { MovieContainer } from '../Movie/Movie.style'

export const MovieListContainer = styled.div`
  border: 1px solid blue;
  width: 100vw;
  padding: 20px;

  overflow: visible;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 20px;

  & ${MovieContainer} {
    background-color: aliceblue;
  }
`;

export const CaptionStyle = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
`