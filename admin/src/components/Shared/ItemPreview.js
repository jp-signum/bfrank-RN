import React from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter';
import Modal from 'react-modal'

const Container = styled.div`
   margin: 14px;
   background: rgb(0, 0, 0, 0.4);
`

const Img = styled.img`
    height: 120px;
    width: 120px;
    float: left;
`

const Name = styled.div`
    padding-left: 20px;
    color: white;
`

const Description = styled.div`
    padding-left: 20px;
    color: white;
`

const Price = styled.div`
    padding-left: 20px;
    color: white;
`

const Quantity = styled.div`
    color: white;
`

const Edit = styled.div`

`


function Products(props) {
    const itemPrice = props.nail.price,
        itemName = props.nail.name,
        itemDescription = props.nail.description,
        itemQuantity = props.nail.quantity,
        itemPicArr = props.nail.pictures;

    return (
        <Container>
            <div>
                <Img src={itemPicArr[0]} alt='first product picture' />
                <div>
                    <Name>{itemName}</Name>
                    <Description>{itemDescription}</Description>
                </div>
                <div>
                    <Edit>Edit</Edit>
                    <Price><Currency quantity={itemPrice} symbol="$" locale="en" /></Price>
                    <Quantity>
                        {itemQuantity != null &&
                            <div>{itemQuantity}</div>
                        }
                    </Quantity>
                </div>
            </div>
            <div>
                {props.fullscreen === true &&
                    <div>
                        <Img src={itemPicArr[1]} alt='second product picture' />
                        <Img src={itemPicArr[2]} alt='third product picture' />
                        <Img src={itemPicArr[3]} alt='fourth product picture' />
                        <Img src={itemPicArr[4]} alt='fith product picture' />
                    </div>
                }
            </div>
        </Container>
    )
}

export default Products;