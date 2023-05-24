import styled from "styled-components";

export const StyledCart = styled.div`
  .divTitle {
    background-color: var(--primary);
    border-radius: 5px 5px 0px 0px;
    height: 65px;
    padding: 22px 20px;
    margin-top: 20px;
    width: 100%;
  }
  ul {
    background-color: var(--gray-10);
    min-height: 120px;
    max-height: 300px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow-y: auto;
    border-bottom: 2px solid var(--gray-20);
    span:hover {
      cursor: pointer;
      color: black;
    }
  }
  li {
    display: flex;
    width: 100%;
    gap: 10px;
  }
  .divImgCart {
    width: 80px;
    background-color: var(--gray-20);
    border-radius: 5px;
  }
  .divInfoCart {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    p {
      font-size: 12px;
      color: var(--gray-50);
    }
  }
  span {
    padding-top: 13px;
    font-size: 12px;
    color: var(--gray-50);
  }
  .divTotal {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 5px;
  }
  .divTotalButton {
    padding: 15px;
    background-color: var(--gray-10);
    gap: 15px;
  }

  @media (min-width: 1000px) {
    width: 360px;
    margin: 0 15px;
    .divTitle {
      margin-top: 0;
    }
  }
`;
