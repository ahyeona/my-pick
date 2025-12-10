import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
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
