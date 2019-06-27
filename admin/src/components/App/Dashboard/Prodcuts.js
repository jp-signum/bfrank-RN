import React from 'react'
import styled from 'styled-components'

import { withContext } from '../../../AppContext'

import ItemPreview from '../../Shared/ItemPreview'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    grid-gap: 10%;
`

const Header = styled.div`
    grid-column: 1 / 13;
    width: 100%;
    height: 9vh;
`

const Title = styled.div`
    color: #fffcfc;
    font-size: 1.4em;
    position: relative;
    padding: 40px 0px 0px 30px;
`

const ListTitle = styled.div`
    grid-column: 1 / 7;
    margin-left: 28px;
    text-align: center;
    color: #fffcfc;
`

const AddTitle = styled.div`
    grid-column: 7 / 13;
    margin-right: 128px;
    margin-left: -80px;
    text-align: center;
    color: #fffcfc;
`

const List = styled.div`
    background: #6C7D8C;
   border: 1px solid #6C7D8C;
   border-radius: 4px;
   grid-column: 1 / 7;
   height: 70vh;
   margin: -38px 0px 0px 28px;
   overflow-y: scroll;
`

const Add = styled.div`
    background: #6C7D8C;
   border: 1px solid #6C7D8C;
   border-radius: 4px;
   grid-column: 7 / 13;
    margin: -38px 128px 0px -80px;
    overflow-y: scroll;
`



function Products(props) {
    const rawItems = props.nails
    console.log(rawItems)

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
        <GridContainer>
            <Header>
                <Title>Products</Title>
            </Header>
            <ListTitle>List (click to edit)</ListTitle>
            <AddTitle>Add New</AddTitle>
            <List>
                {AllItems}
            </List>
            <Add>

            </Add>
        </GridContainer>
    )
}

export default withContext(Products);