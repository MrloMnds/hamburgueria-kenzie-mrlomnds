import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 288px;
  border: 2px solid var(--gray-20);
  border-radius: 8px;
  max-height: 353px;

  .imgDiv {
    background-color: var(--gray-10);
    height: 150px;
    display: flex;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .infoDiv {
    gap: 20px;
    padding: 20px;
  }

  &:hover {
    border: 2px solid black;
  }
`;
