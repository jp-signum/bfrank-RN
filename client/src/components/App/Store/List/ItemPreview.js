import React from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter'
import { Link } from 'react-router-dom'

import media from '../../../../theme/Device'

const Container = styled.div`
    padding: 4%;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        padding: 0px;
    `}
`
const Img = styled.img`
    width: 100%;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

     /* ${media.tablet`
        width: 92%;
    `} */
`

const Name = styled.div`
    font-weight: bold;
    font-size: 1.2em;
    padding: 2px 0px 2px 0px;
`

const Price = styled.div`

`

const Quantity = styled.div`
    font-size: 0.9em;
    color: #BF455B;
`

function ItemPreview(props) {

    const itemPrice = (props.nail.price / 100),
        itemName = props.nail.name,
        itemPicArr = props.nail.pictures,
        quantity = props.nail.quantity,
        itemID = props.nail._id;

    return (
        <Container>
            <Link
                to={'/store/' + itemID}
                id={itemID}
                className='itemPreview-link' >
                <Img src={itemPicArr[0]} alt='first product picture' />
            </Link>
            <Quantity>
                {quantity <= 30 &&
                    <div>{quantity}<span> remaining</span></div>
                }
            </Quantity>
            <Name>{itemName}</Name>
            <Price><Currency quantity={itemPrice} symbol="$" locale="en" /></Price>
        </Container>
    )
}


export default ItemPreview;