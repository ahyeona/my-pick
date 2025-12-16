import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 3rem; 
  left: 0;
  width: 100vw;
  height: calc(100vh - 3rem);

  background-color: ${({ theme }) => theme.bgOverlay};
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
`;

export const LoadingContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: ${({ theme }) => theme.textPrimary || "#333"};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;
