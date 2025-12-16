import styled from 'styled-components'

export const NavStyle = styled.div`
  width: 100%;
  min-height: 3rem;
  padding: 0 12px;

  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.navBg};

  & p {
    color: ${({ theme }) => theme.buttonText};
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    row-gap: 8px;
  }
`