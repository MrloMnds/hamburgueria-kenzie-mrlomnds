import { Headings } from "../../../components/Headings";
import styled, { css } from "styled-components";

export const StyledHeading = styled(Headings)`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  color: var(${({ color }) => (color ? color : "--black")});
  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: 1.625rem;
        `;
      case "two":
        return css`
          font-size: 1.375rem;
        `;
      case "three":
        return css`
          font-size: 1.125rem;
        `;
      case "four":
        return css`
          font-size: 0.875rem;
        `;
      default:
        return false;
    }
  }}
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
`;
