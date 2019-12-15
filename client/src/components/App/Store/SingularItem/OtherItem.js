import React from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal'

import media from '../../../../theme/Device'

const Container = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    padding: 4%;

    ${media.tablet`
        padding: 0px;
    `}
`

const ImgDiv = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    border-radius: 4px;

    ${media.laptop`
        width: 240px;
        height: 280px;
    `}
`

const Img = styled.img`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    width: 100%;

    ${media.laptop`
        height: 100%;
    `}
`

const Name = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    color: #0D0D0D;
    font-size: 1em;
    font-weight: bold;
    padding: 2px 0px 2px 0px;

    ${media.phoneM`
        font-size: 1.1em;
    `}

     ${media.laptop`
        :hover {
            text-decoration: underline;
        }
    `}
`

const Price = styled.div`
    font-size: 0.9em;
    
    ${media.phoneM`
        font-size: 1em;
    `}
`

const Quantity = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    color: #d63c4f;
    font-size: 0.8em;

    ${media.phoneM`
        font-size: 0.9em;
    `}

    ${media.laptop`
        font-size: 1em;
    `}
`

const StuffDiv = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;

    ${media.laptop`
        padding: 20px 0px 0px 0px;
    `}
`

function OtherItem(props) {
    const itemPrice = (props.item.price / 100),
        itemName = props.item.name,
        itemPicArr = props.item.pictures,
        quantity = props.item.quantity,
        itemID = props.item._id;

    return (
        <Container>
            <Fade duration={2000}>
                <Link to={'/store/' + itemID} id={itemID} className='itemPreview-link' >
                    <ImgDiv>
                        <Img src={itemPicArr[0]} alt='product picture'
                            onMouseOver={e => (e.currentTarget.src = itemPicArr[1])}
                            onMouseOut={e => (e.currentTarget.src = itemPicArr[0])} />
                    </ImgDiv>
                </Link>
            </Fade>
            <Fade duration={2000}>
                <StuffDiv>
                    <Quantity>
                        {quantity <= 30 &&
                            <div>{quantity}<span> remaining</span></div>
                        }
                    </Quantity>
                    <Link to={'/store/' + itemID} id={itemID} className='itemPreview-link' >
                        <Name>{itemName}</Name>
                    </Link>
                    <Price><Currency quantity={itemPrice} symbol='$' locale='en' /></Price>
                </StuffDiv>
            </Fade>
        </Container>
    )
}

export default OtherItem;