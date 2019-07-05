import React from 'react'
import styled from 'styled-components'

import { withContext } from '../../../AppContext'

import ItemPreview from '../../Shared/ItemPreview'
import AddItemForm from './AddItemForm'

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
    color: #0D0D0D;
    font-size: 1.4em;
    position: relative;
    padding: 40px 0px 0px 30px;
`

const ListTitle = styled.div`
    grid-column: 1 / 8;
    margin-left: 2px;
    text-align: center;
    color: #0D0D0D;
`

const AddTitle = styled.div`
    grid-column: 8 / 13;
    margin-left: -170px;
    text-align: center;
    color: #0D0D0D;
`

const List = styled.div`
    background: #0D0D0D;
   border: 1px solid #0D0D0D;
   border-radius: 4px;
   grid-column: 1 / 8;
   height: 70vh;
   margin: -38px 0px 0px 28px;
   overflow-y: scroll;
   display: flex;
   flex-direction: column;
`

const Add = styled.div`
    background: #0D0D0D;
   border: 1px solid #0D0D0D;
   border-radius: 4px;
   grid-column: 8 / 13;
    margin: -38px 128px 0px -80px;
    overflow-y: scroll;
`


function Products(props) {
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
        <GridContainer>
            <Header>
                <Title>Products</Title>
            </Header>
            <ListTitle>Product List</ListTitle>
            <AddTitle>Add New</AddTitle>
            <List>
                {AllItems}
            </List>
            <Add>
                <AddItemForm />
            </Add>
        </GridContainer>
    )
}

export default withContext(Products);