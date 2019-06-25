import { createGlobalStyle } from "styled-components"

import PrivityRegular1 from '../assets/fonts/Privity-Regular.woff'
import PrivityRegular2 from '../assets/fonts/Privity-Regular.woff2'

const GlobStyle = createGlobalStyle`

@font-face {
  font-family: 'PrivityRegular';
  src: ${PrivityRegular1} format('woff'),
        ${PrivityRegular2} format('woff2');

  font-display: fallback;
  font-weight: normal;
  font-style: normal;
}

html, body {
  height: 100%;
}
  
body {
  padding: 0;
  margin: 0;
  font-family: 'PrivityRegular', sans-serif;
}

input {
  border: none;
}

[placeholder]:focus::-webkit-input-placeholder {
  transition: opacity 0.35s 0.35s ease; 
  opacity: 0;
}

/* strange menu link gold ring focus fix */

a {
  text-decoration: none;

  :focus {
    outline:  none !important;
    outline-color: none !important;
    outline-style: none !important;
    outline-width: none !important;
    -webkit-focus-ring-color: none !important;
  } 
}

input {
  :focus {
    outline:  none !important;
    outline-color: none !important;
    outline-style: none !important;
    outline-width: none !important;
    -webkit-focus-ring-color: none !important;
  } 
}

button {
  outline: none;
}

`

export default GlobStyle