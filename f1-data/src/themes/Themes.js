import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#dee3ed",
  fontColor: "#000",
  scrollColor: "#FFFFFF",
  cardColor: "#f8f9fc"
};

export const darkTheme = {
  body: "#1d1e20",
  fontColor: "#fff",
  scrollColor: "#212529",
  cardColor: "#111213"
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

  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #F0F8FF;
    background-color: ${(props) =>
      props.theme.body === "#FFFFFF" ? "#212529" : "#fff"};
    border-radius: 15px !important;
    color: ${(props) => (props.theme.body === "#FFFFFF" ? "#fff" : "#000")};
  }

  .nav-link, .nav-link:hover, .nav-link:not(:active) {
    border-radius: 15px !important;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) =>
      props.theme.body === "#FFFFFF" ? "#C0C0C0;" : "#303030"};
  }

  .generic-card {
    background-color: ${(props) => props.theme.cardColor} !important;
  }

  .info-row{
    background-color: ${(props) => props.theme.cardColor} !important;
  }
`;
