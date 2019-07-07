import React, { Component } from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter'
import { Link } from 'react-router-dom'

const Container = styled.div`

`
const Img = styled.img`
    width: 50%;
`

const Name = styled.div`

`

const Price = styled.div`

`

class ItemPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const itemPrice = (this.props.nail.price / 100),
            itemName = this.props.nail.name,
            itemPicArr = this.props.nail.pictures,
            itemID = this.props.nail._id;

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
}

export default ItemPreview;