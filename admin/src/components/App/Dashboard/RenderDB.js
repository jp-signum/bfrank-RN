import React from 'react'
import styled from 'styled-components'

import Main from './Main'
import Discounts from './Discounts'
import Analytics from './Analytics'
import Orders from './Orders'
import Products from './Prodcuts'

const DisplayContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`

function RenderDB(props) {
    let renderJSX 
    switch (props.renderProp) {
        case 'discounts':
            return renderJSX = <Discounts />;
        case 'analytics':
            return renderJSX = <Analytics />;
        case 'orders':
            return renderJSX = <Orders />;
        case 'products':
            return renderJSX = <Products />;
        case 'main':
            return renderJSX =  <Main />;
        default:
            return renderJSX =  <Main />;
    }

    // eslint-disable-next-line no-unreachable
    return (
        <DisplayContainer>
            {renderJSX}
        </DisplayContainer>
    )
}

export default RenderDB;