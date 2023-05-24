import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 15px;

  @media (min-width: 1000px) {
    flex-wrap: wrap;
    width: 71%;
  }
`;
