import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
  }

*{
  box-sizing: border-box;
  background-color: #ffdbdf;}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`;
