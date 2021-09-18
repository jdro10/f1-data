import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F8F8F8",
  fontColor: "#000",
  scrollColor: "#F8F8F8",
};

export const darkTheme = {
  body: "#000000",
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
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .tab-style {
    color: ${(props) => props.theme.fontColor};
  }

  .tab-style:hover {
    color: ${(props) => props.theme.fontColor};
  }

  tab-style:active {
      color: black !important;
  }

  .race-link {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
  }

  .race-link:hover{
    color: ${(props) => props.theme.fontColor};
    opacity: 0.5;
    display: block;
  }
`;
