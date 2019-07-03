import React from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter';
import Modal from 'react-modal'

const Container = styled.div`
   margin: 14px;
   background: rgb(242, 242, 242, 0.1);
`

const Img = styled.img`
    height: 150px;
    width: 150px;
    float: left;
`

const Name = styled.div`
    padding-left: 10px;
    color: #F2F2F2;
    display: inline-block;
    font-size: 1.1em;
`

const Edit = styled.div`
    display: inline-block;
    color: rgb(242, 242, 242, 0.4);
    cursor: pointer;
    left: 30%;
    position: relative;
    font-size: 0.9em;

    :hover{
        color: #F2F2F2;
    }
`

const Description = styled.div`
    padding: 0px 10px 0px 160px;
    color: #F2F2F2;
`

const Price = styled.div`
    padding: 10px 0px 0px 20px;
    color: #F2F2F2;
    font-size: 0.9em;
    display: inline-block;
`

const Quantity = styled.div`
    color: #F2F2F2;
    display: inline-block;
    font-size: 0.9em;
    left: 30%;
    position: relative;
`

const RelativeDiv1 = styled.div`
    position: relative;
    padding: 6px 0px 6px 0px;
`

const RelativeDiv = styled.div`
    position: relative;
`


function Products(props) {
    const itemPrice = (props.nail.price / 100),
        itemName = props.nail.name,
        itemDescription = props.nail.description,
        itemQuantity = props.nail.quantity,
        itemPicArr = props.nail.pictures;

    return (
        <Container>
            <div>
                <Img src={itemPicArr[0]} alt='first product picture' />
                <RelativeDiv1>
                    <Name>{itemName}</Name>
                    <Edit>Edit</Edit>
                </RelativeDiv1>
                <RelativeDiv>
                    <Description>{itemDescription}</Description>
                    <Price><Currency quantity={itemPrice} symbol="$" locale="en" /></Price>
                    <Quantity>
                        {itemQuantity != null &&
                            <div><span>Quantity: </span>{itemQuantity}</div>
                        }
                    </Quantity>
                </RelativeDiv>
            </div>
            <div>
                <Img src={itemPicArr[1]} alt='second product picture' />
                <Img src={itemPicArr[2]} alt='third product picture' />
                <Img src={itemPicArr[3]} alt='fourth product picture' />
                <Img src={itemPicArr[4]} alt='fith product picture' />
            </div>
        </Container>
    )
}

export default Products;