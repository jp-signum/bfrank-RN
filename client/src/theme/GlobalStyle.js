import { createGlobalStyle } from "styled-components"

// import BebasNeue from '../assets/fonts/Bebas Neue.ttf'
import media from '../theme/Device'

const GlobStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
    margin-bottom: -100px;
  }
  /* @font-face {
    font-family: "BebasNeue";
    src: ${BebasNeue};
    font-display: fallback;
  } */

`

export default GlobStyle