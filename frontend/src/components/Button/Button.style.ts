import styled from 'styled-components'

export const ButtonStyle = styled.div`
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.buttonText};
  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.96);
    filter: brightness(0.9);
  }
`