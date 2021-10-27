import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F8F8F8",
  fontColor: "#000",
  scrollColor: "#F8F8F8",
};

export const darkTheme = {
  body: "#181818",
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
    text-decoration: underline;
    text-decoration-color: #e10600;
    text-decoration-thickness: 3px;
    text-underline-offset: 3px;
    display: block;
  }

  .red-btn{
    background-color: #e10600;
    border-color: #e10600;
    font-weight: 600;
    border-radius: 15px;
  }

  .red-btn:hover{
    opacity: 0.5;
    background-color: #e10600;
    border-color: #e10600;
  }
`;
