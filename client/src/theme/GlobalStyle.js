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
  font-family: 'AceSans', sans-serif;
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
  width: 44px;
  height: 40px;
  top: 20px;
  right: 26px;
  z-index: 10 !important;
  transition: ease 0.5s;
    -o-transition: all 0.5s ease;

  :hover > span span {
    background: #D63C4F !important; 
    opacity: 1 !important;
  }

  ${media.tablet`
    width: 50px;
    height: 46px;
    top: 24px;
    right: 34px;    
  `}
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #F4FAFF;
  border-radius: 3px;
  height: 10% !important;
  transition: all ease 0.5s;
  -o-transition: all .5s ease;

  ${media.tablet`
    height: 12% !important;
  `}
}

.bm-burger-bars-DARK {
  background: #090404;
  border-radius: 3px;
  height: 10% !important;
  transition: all ease 0.5s;
  -o-transition: all .5s ease;

  ${media.tablet`
    height: 12% !important;
  `}
}

/* Position and sizing of clickable cross button  */
.bm-cross-button {
  height: 30px !important;
  width: 30px !important;
  right: 36px !important;
  top: -31px !important;
  
  :hover > span span {
    background: #D63C4F !important;
  }

  ${media.phoneS`
    height: 31px !important;
    width: 31px !important;
    right: 34px !important;
    top: -31px !important;
  `}

  ${media.phoneM`
    height: 34px !important;
    width: 34px !important;
    right: 34px !important;
    top: -31px !important;
  `}

  ${media.tablet`
    height: 34px !important;
    width: 34px !important;
    right: 47px !important;
    top: -36px !important;
  `}
}

/* Color/shape of close button cross */
.bm-cross {
  background: #fffdfd;
  height: 25px !important;
  width: 2px !important;
  border-radius: 4px;

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
  background: #fffdfd;
  height: 25px ;
  width: 2px ;
  border-radius: 4px;
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
  background: #fffdfd;
  height: 25px ;
  width: 2px ;
  border-radius: 4px;
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
  text-align: right;
}

/* Styling of overlay */
.bm-overlay {
  background: rgb(9, 4, 4, 0.9) !important;
  top: 0 !important;
  left: 0 !important;
  overflow: hidden !important; 
}

/* styling for the menu items */
.menu-item {
  text-decoration: none;
  color: #fffdfd;
  transition: transform 0.875s cubic-bezier(0.7, 0, 0.3, 1)  !important ;
  -o-transition: transform 0.875s cubic-bezier(0.7, 0, 0.3, 1)  !important ;


  :hover {
    color: #D63C4F;
  }

    ${media.phoneS`
      padding-bottom: 20px;
      font-size: 1.2em;
    `}
      
    ${media.phoneM`
      padding-bottom: 30px;
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