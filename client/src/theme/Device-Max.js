import { css } from "styled-components"

const sizes = {
    mobile: 450
  }
  
  // iterate through the sizes and create a media template
const mediaMax = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-height: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  }, {})

export default mediaMax