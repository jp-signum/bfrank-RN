import React from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal'

import media from '../../../../theme/Device'

const Container = styled.div`
    padding: 4%;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

    ${media.tablet`
        padding: 0px;
    `}
`

const ImgDiv = styled.div`
    transition:all ease 0.5s;
    -o-transition: all .5s ease;
    border-radius: 4px;

    ${media.laptop`
        width: 240px;
        height: 280px;
    `}
`

const Img = styled.img`
    width: 100%;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

    ${media.laptop`
        height: 100%;
    `}
`

const Name = styled.div`
    color: #0D0D0D;
    font-weight: bold;
    font-size: 1em;
    padding: 2px 0px 2px 0px;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

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
    font-size: 0.8em;
    color: #d63c4f;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

    ${media.phoneM`
        font-size: 0.9em;
    `}

    ${media.laptop`
        font-size: 1em;
    `}
`

const StuffDiv = styled.div`
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

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
                <Link
                    to={'/store/' + itemID}
                    id={itemID}
                    className='itemPreview-link' >
                    <ImgDiv>
                        <Img
                            src={itemPicArr[0]}
                            onMouseOver={e => (e.currentTarget.src = itemPicArr[1])}
                            onMouseOut={e => (e.currentTarget.src = itemPicArr[0])}
                            alt='product picture' />
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
                    <Link
                        to={'/store/' + itemID}
                        id={itemID}
                        className='itemPreview-link' >
                        <Name>{itemName}</Name>
                    </Link>
                    <Price><Currency quantity={itemPrice} symbol='$' locale='en' /></Price>
                </StuffDiv>
            </Fade>
        </Container>
    )
}

export default OtherItem;