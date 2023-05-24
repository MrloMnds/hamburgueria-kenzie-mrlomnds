import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #000;
    --white: #fff;
    --primary: #27AE60;
    --primary-50: #93D7AF;
    --secondary: #EB5757;
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-10: #f5f5f5;
    --negative: #E60000;
    --warning: #FFCD07;
    --success: #168821;
  }

  span {
    color: var(--primary);
  }
  button {
    cursor: pointer;
  }
  ul, ol {
    list-style: none;
  }
  section, aside, div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100vw;
  max-width: 1320px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  background-color: var(--gray-10);
  padding: 1rem;
  .divInput {
    position: relative;
  }
  img {
    width: 55%;
  }

  @media (min-width: 1000px) {
    padding-inline: 7%;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    img {
      width: 158px;
    }
    .divInput {
      width: 365px;
    }
  }
`;
