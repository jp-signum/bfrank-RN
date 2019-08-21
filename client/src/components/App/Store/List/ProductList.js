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
        grid-template-columns: 40vw 40vw;
        grid-gap: 40px;
        padding-top: 100px;
        margin-left: 80px;
    `}

    ${media.laptopL`
        grid-template-columns: 26vw 26vw 26vw;
        grid-gap: 40px;
        margin-left: 90px;
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