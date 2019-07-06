import { createGlobalStyle } from "styled-components"

import media from './Device'

import AceSans from '../assets/fonts/AceSans.woff'
import PrivityRegular1 from '../assets/fonts/Privity-Regular.woff'
import PrivityRegular2 from '../assets/fonts/Privity-Regular.woff2'

const GlobStyle = createGlobalStyle`

@font-face {
  font-family: 'AceSans';
  src: ${AceSans} format('woff');

  font-display: fallback;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Privity';
  src: ${PrivityRegular1} format('woff'),
        ${PrivityRegular2} format('woff2');

  font-display: fallback;
  font-weight: normal;
  font-style: normal;
}

html, body {
  height: 100%
}
  
body {
  padding: 0;
  margin: 0;
  font-family: 'Privity', sans-serif;
}

input {
  border: none;
}

[placeholder]:focus::-webkit-input-placeholder {
  transition: opacity 0.35s 0.35s ease; 
  opacity: 0;
}

button {
  border: none;
}


/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 30px;
  height: 30px;
  top: 17px;
  left: 24px;
  z-index: 10 !important;
  transition: ease 0.5s;
    -o-transition: all 0.5s ease;

  :hover > span span {
    background: rgb(13, 13, 13, 0.3) !important; 
    opacity: 1 !important;
  }

  ${media.tablet`
    width: 34px;
    height: 34px;
    top: 20px;
    left: 27px;    
  `}
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #F4FAFF;
  height: 6% !important;
  transition: all ease 0.5s;
  -o-transition: all .5s ease;

  ${media.tablet`
    height: 8% !important;
  `}
}

.bm-burger-bars-DARK {
  background: #0D0D0D;
  height: 6% !important;
  transition: all ease 0.5s;
  -o-transition: all .5s ease;

  ${media.tablet`
    height: 8% !important;
  `}
}

/* Position and sizing of clickable cross button  */
.bm-cross-button {
  height: 30px !important;
  width: 30px !important;
  right: 12px !important;
  top: 14px !important;
  border-radius: none !important;
  
  :hover > span span {
    background: rgb(242, 242, 242, 0.3) !important;
  }

  ${media.tablet`
    height: 34px !important;
    width: 34px !important;
    right: 30px !important;
    top: 23px !important;
  `}
}

/* Color/shape of close button cross */
.bm-cross {
  background: #fffcfc;
  height: 25px !important;
  width: 2px !important;


  ${media.tablet`
    height: 30px !important;
    width: 3px !important;
  `}
}

.bm-cross2 {
  position: absolute; 
  width: 3px; 
  height: 14px; 
  transform: rotate(-45deg);
  background: #F2F2F2;
  height: 25px ;
  width: 2px ;
  top: -6px;
  right: 15.5px;
  
  ${media.tablet`
    height: 30px ;
    width: 3px ;
  `}
}

.bm-cross3 {
  position: absolute; 
  width: 3px; 
  height: 14px; 
  transform: rotate(45deg);
  background: #F2F2F2;
  height: 25px ;
  width: 2px ;
  top: -6px;
  right: 15.5px;

  ${media.tablet`
    height: 30px ;
    width: 3px ;
  `}
}

/* General sidebar styles */
.bm-menu {
  margin-top: 80px;
  padding: 0px 31px 0px 0px;
  font-size: 1.3em;

  ${media.tablet`
    margin-top: 120px;
    font-size: 1.8em;
  `}
}

/* Wrapper for item list */
.bm-item-list {
  overflow: hidden !important;
}

/* Individual item */
.bm-item {
  display: inline-block;
  text-align: left;
}

/* Styling of overlay */
.bm-overlay {
  background: rgb(4, 4, 4, 0.9) !important;
  top: 0 !important;
  left: 0 !important;
  overflow: hidden !important; 
}

/* styling for the menu items */
.menu-item {
  text-decoration: none;
  letter-spacing: 0.05em;
  color: #fffcfc;
  font-size: 1.2em;
  padding-bottom: 20px;
  margin-top: 20px;
  transition: transform 0.875s cubic-bezier(0.7, 0, 0.3, 1)  !important ;
  -o-transition: transform 0.875s cubic-bezier(0.7, 0, 0.3, 1)  !important ;


  :hover {
    color: rgb(242, 242, 242, 0.3);
  }

      
    ${media.phoneM`
      font-size: 1.4em;
    `}
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

button {
  outline: none;
}


`

export default GlobStyle