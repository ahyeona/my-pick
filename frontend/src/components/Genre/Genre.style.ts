
import styled from "styled-components"

export const GenreContainer = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 20px;
  padding-inline: 10px;
  padding-block: 2px; 
  
  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.96);
    filter: brightness(0.9);
  }
`