import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 0px 20px;
          width: 100%;
          height: 60px;
        `;
      case "medium":
        return css`
          padding: 0px 20px;
          width: 106px;
          height: 40px;
        `;
      default:
        return false;
    }
  }}
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "green":
        return css`
          color: var(--white);
          background-color: var(--primary);
          border: 2px solid var(--primary);
          &:hover {
            background-color: var(--primary-50);
          }
        `;
      case "gray":
        return css`
          color: var(--gray-50);
          background-color: var(--gray-20);
          border: 2px solid var(--gray-20);
          &:hover {
            background-color: var(--gray-50);
            color: var(--gray-20);
          }
        `;
      default:
        return false;
    }
  }}
  ${({ position }) => {
    return css`
      position: ${position};
      top: 10px;
      right: 10px;
    `;
  }};
`;
