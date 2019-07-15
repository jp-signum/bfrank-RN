import React from 'react'
import styled from 'styled-components'

import { withContext } from '../../../AppContext'

import media from '../../../../theme/Device'

import ItemPreview from './ItemPreview'

const Container = styled.div`
    width: 100%;
    height: 100%;
    color: #0D0D0D;
    background: #fdfdfd;
    transition: all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        display: grid;
        grid-template-columns: 28.5vw 28.5vw 28.5vw;
        grid-gap: 20px;
        padding: 4%;
    `}


    ${media.laptop`
        grid-template-columns: 26.6vw 26.6vw 26.6vw;
        grid-gap: 51px;
        padding: 5%;
        margin-left: 10px;
    `}

    ${media.laptopL`
        grid-template-columns: 20vw 20vw 20vw 20vw;
        grid-gap: 42.5px;
        margin-left: 2px;
    `}

    ${media.laptopLM`
        grid-gap: 49px;
        margin-left: 0px;
    `}
`



function ProductList(props) {
    const rawItems = props.nails

    const AllItems = rawItems.map(nail => {
        return (
            <ItemPreview
                key={nail._id}
                nail={nail}
                id={nail._id}
            />
        )
    })
    return (
        <Container>
            {AllItems}
        </Container>
    )
}

export default withContext(ProductList);