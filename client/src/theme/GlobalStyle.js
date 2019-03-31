import { createGlobalStyle } from "styled-components"


const GlobStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

input {
  border: none;
}

[placeholder]:focus::-webkit-input-placeholder {
  transition: opacity 0.35s 0.35s ease; 
  opacity: 0;
}


`

export default GlobStyle