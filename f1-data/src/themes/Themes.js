import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#dee3ed",
  fontColor: "#000",
  scrollColor: "#FFFFFF",
  cardColor: "#f8f9fc",
};

export const darkTheme = {
  body: "#1d1e20",
  fontColor: "#fff",
  scrollColor: "#212529",
  cardColor: "#111213",
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
    text-decoration-color: #D3D3D3;
    text-decoration-thickness: 3px;
    text-underline-offset: 3px;
    display: block;
  }

  .main-btn{
    color: ${(props) => (props.theme.body === "#1d1e20" ? "#111213" : "#fff")};
    background-color: ${(props) =>
      props.theme.body === "#1d1e20" ? "#fff" : "#000"};
    font-weight: 600;
    border-radius: 65px;
    margin-top: 15px;
    width: 100%;
  }

  .main-btn:hover{
    color: ${(props) => (props.theme.body === "#1d1e20" ? "#000" : "#fff")};
    background-color: ${(props) =>
      props.theme.body === "#1d1e20" ? "#E8E8E8" : "#282828"};
  }

  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    background-color: ${(props) =>
      props.theme.body === "#1d1e20" ? "#f8f9fc" : "#1d1e20"};
    border-radius: 15px !important;
    color: ${(props) => (props.theme.body === "#1d1e20" ? "#111213" : "#fff")};
  }

  .nav-link, .nav-link:hover, .nav-link:not(:active) {
    border-radius: 15px !important;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) =>
      props.theme.body === "#1d1e20" ? "#111213" : "#fff"};
  }

  .generic-card {
    background-color: ${(props) => props.theme.cardColor} !important;
  }

  .info-row{
    background-color: ${(props) => props.theme.cardColor} !important;
  }

  th {
    background-color: ${(props) => props.theme.cardColor} !important;
    color: ${(props) => props.theme.fontColor} !important;
  } 

  thead th {
    background-color: ${(props) => props.theme.cardColor} !important;
  }

  tbody td {
    background-color: ${(props) => props.theme.cardColor} !important;
  }
`;
