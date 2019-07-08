import React from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter'
import { Link } from 'react-router-dom'

const Container = styled.div`

`
const Img = styled.img`
    width: 96%;
    padding: 2%;
`

const Name = styled.div`

`

const Price = styled.div`

`

function ItemPreview(props) {

    const itemPrice = (props.nail.price / 100),
        itemName = props.nail.name,
        itemPicArr = props.nail.pictures,
        itemID = props.nail._id;

    return (
        <Container>
            <Link
                to={'/store/' + itemID}
                id={itemID}
                className='itemPreview-link' >
                <Img src={itemPicArr[0]} alt='first product picture' />
            </Link>
            <Name>{itemName}</Name>
            <Price><Currency quantity={itemPrice} symbol="$" locale="en" /></Price>
        </Container>
    )
}


export default ItemPreview;