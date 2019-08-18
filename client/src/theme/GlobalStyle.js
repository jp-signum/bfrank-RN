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
  width: 26px;
  height: 28px;
  top: 18px;
  left: 26px;
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
  background: #fdfdfd;
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
  left: 24px !important;
  top: 14px !important;
  border-radius: none !important;
  
  :hover > span span {
    background: rgb(191, 69, 91,  0.3) !important;
  }

  ${media.phoneM`
    left: 24px !important;
  `}

  ${media.tablet`
    height: 34px !important;
    width: 34px !important;
    right: 30px !important;
    top: 23px !important;
  `}
}

/* Color/shape of close button cross */
.bm-cross {
  background: #fdfdfd;
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
  background: #fdfdfd;
  height: 25px ;
  width: 2px ;
  top: -10px;
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
  background: #fdfdfd;
  height: 25px ;
  width: 2px ;
  top: -10px;
  right: 15.5px;

  ${media.tablet`
    height: 30px ;
    width: 3px ;
  `}
}


/* General sidebar styles */
.bm-menu {
  margin: 140px 100px 0px 30px;
  font-size: 1.3em;

  ${media.tablet`
    margin: 130px 0px 0px 40px;
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
  margin-top: 10px;
  outline:  none !important;
    outline-color: none !important;
    outline-style: none !important;
    outline-width: none !important;
    -webkit-focus-ring-color: none !important;
}

/* Styling of overlay */
.bm-overlay {
  background: rgb(4, 4, 4, 0.9) !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  overflow: hidden !important; 
}

/* styling for the menu items */
.menu-item {
  text-decoration: none;
  letter-spacing: 0.05em;
  color: #fdfdfd;
  font-size: 1.2em;
  padding-bottom: 14px;
  transition: transform 0.875s cubic-bezier(0.7, 0, 0.3, 1)  !important ;
  -o-transition: transform 0.875s cubic-bezier(0.7, 0, 0.3, 1)  !important ;

  :hover {
    color: rgb(243, 243, 243, 0.3);
  }

    ${media.phoneM`
      font-size: 1.3em;
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

/* menu location underline */

.storeUnderline {
  text-decoration: none;
  border-bottom: 1px solid #fdfdfd;
  padding-bottom: 3px;
  transition: ease 0.3s;
    -o-transition: all 0.3s ease;
  
  color: #fdfdfd;
  cursor: pointer;

  :hover{
    color: rgb(253,  253,  253, 0.6)
  }
}

.storePlain {
  text-decoration: none;
  color: #fdfdfd;
  cursor: pointer;

  :hover{
    color: rgb(253,  253,  253, 0.6)
  }
}

.aboutUnderline {
  text-decoration: none;
  border-bottom: 1px solid #fdfdfd;
  padding-bottom: 3px;
  transition: ease 0.3s;
    -o-transition: all 0.3s ease;
  
  color: #fdfdfd;
  cursor: pointer;

  :hover{
    color: rgb(253,  253,  253, 0.6)
  }
}

.aboutPlain {
  text-decoration: none;
  color: #fdfdfd;
  cursor: pointer;

  :hover{
    color: rgb(253,  253,  253, 0.6)
  }
}

.accountUnderline {
  text-decoration: none;
  border-bottom: 1px solid #fdfdfd;
  padding-bottom: 3px;
  transition: ease 0.3s;
    -o-transition: all 0.3s ease;
  
  color: #fdfdfd;
  cursor: pointer;

  :hover{
    color: rgb(253,  253,  253, 0.6)
  }
}

.accountPlain {
  text-decoration: none;
  color: #fdfdfd;
  cursor: pointer;

  :hover{
    color: rgb(253,  253,  253, 0.6)
  }
}

/* share icon styles */

.facebookShare {
    margin-right: 20px;

    :focus {
      outline:  none !important;
      outline-color: none !important;
      outline-style: none !important;
      outline-width: none !important;
      -webkit-focus-ring-color: none !important;
    } 
}

.twitterShare {
    margin-right: 20px;

    :focus {
      outline:  none !important;
      outline-color: none !important;
      outline-style: none !important;
      outline-width: none !important;
      -webkit-focus-ring-color: none !important;
    } 
}

.pinterestShare {

    :focus {
      outline:  none !important;
      outline-color: none !important;
      outline-style: none !important;
      outline-width: none !important;
      -webkit-focus-ring-color: none !important;
    } 
}

/* continue scrolling animations */

.otherShopAnimate {
  animation: osa01 4s infinite;
    -o-animation: osa01 4s infinite;
    
    @keyframes osa01 {
    0% {
        opacity: 0;
        }
    50% {
        opacity: 1;
        }
    100% {
        opacity: 0;
        }
    }
}

.otherShopAnimateStop {

}

/* authentication toggle class switches */

.loginHighlight {
    color: #fdfdfd;
}

.loginNotHL {
  transition: all ease 0.5s;
  -o-transition: all 0.5s ease;
  color: rgb(253,  253,  253, 0.5);

  :hover {
      color: rgb(253,  253,  253, 1);
  }
}

`

export default GlobStyle