import React from 'react'
import styled from 'styled-components'

import { withContext } from '../../../AppContext'

import media from '../../../../theme/Device'

import ItemPreview from './ItemPreview'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #fdfdfd;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        display: grid;
        grid-template-columns: 28.5vw 28.5vw 28.5vw;
        grid-gap: 20px;
        padding: 4%;
    `}

    ${media.laptop`
        grid-template-columns: auto auto auto auto;
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