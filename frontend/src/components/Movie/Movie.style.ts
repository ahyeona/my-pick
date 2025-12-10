import styled from 'styled-components'

// export const MovieContainer = styled.div`
//   border: 1px solid blue;
//   cursor: pointer;
//   width: 160px;
//   display: flex;
//   flex-direction: column;
// `;


export const MovieContainer = styled.div`
  border: 1px solid blue;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  width: 100%;        /* 그리드 칸에 맞게 늘어나도록 */
  box-sizing: border-box;

  & img {
    max-width: 220px;
    height: 300px;
  }
`;