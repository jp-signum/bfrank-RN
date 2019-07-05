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

/*custom modal close button cross */
.bm-cross2 {
  position: absolute; 
  width: 3px; 
  height: 14px; 
  transform: rotate(-45deg);
  background: #fffdfd;
  height: 30px ;
  width: 3px ;
  border-radius: 4px;
  top: -6px;
  right: 15.5px;
}

.bm-cross3 {
  position: absolute; 
  width: 3px; 
  height: 14px; 
  transform: rotate(45deg);
  background: #fffdfd;
  height: 30px ;
  width: 3px ;
  border-radius: 4px;
  top: -6px;
  right: 15.5px;
}


/*file list styles */
#fileList{
  color: #c7c7c7 ;
}

`

export default GlobStyle