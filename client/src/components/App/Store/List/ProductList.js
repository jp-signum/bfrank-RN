import React from 'react'
import styled from 'styled-components'

import { withContext } from '../../../AppContext'

import ItemPreview from './ItemPreview';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #fdfdfd;
`

const List = styled.div`
   
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
            <List>
                {AllItems}
            </List>
        </Container>
    )
}

export default withContext(ProductList);