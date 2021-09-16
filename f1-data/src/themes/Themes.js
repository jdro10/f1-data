import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F8F8F8",
  fontColor: "#000",
  scrollColor: "#F8F8F8",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  scrollColor: "#212529",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color : ${(props) => props.theme.body};
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollColor};
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
