import React, { Component } from 'react'
import styled from 'styled-components'
import { withContext } from '../../../AppContext'
import Currency from 'react-currency-formatter'
import Helmet from 'react-helmet'

import { Meta } from '../../../Shared/Meta'
import { filterById, getNested } from '../../../Shared/HelperFunctions'

import media from '../../../../theme/Device'

import PicSwitchMain from './PicSwitchMain'

const Container = styled.div`

`

const ImgContainer = styled.div`
    width: 100%;
    display: relative;
    height: 400px;
`

const AddOne = styled.i`
    position: absolute;
    top: 200px;
    right: 10px;
    border: solid rgb(13, 13, 13, 0.6);
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 12px;
    transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
`

const SubtractOne = styled.i`
    position: absolute;
    top: 200px;
    left: 10px;
    border: solid rgb(13, 13, 13, 0.6);
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 12px;
    transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
`

const StuffDiv = styled.div`
    padding: 20px 26px 20px 26px; 
`

const Quantity = styled.div`
    font-size: 0.9em;
    color: #d63c4f;

    ${media.phoneM`
        font-size: 1em;
    `}

    ${media.laptop`
        font-size: 1em;
    `}
`

const PositionDiv = styled.div`
    position: relative;
    padding: 4px 0px 4px 0px;
`

const Name = styled.div`
    color: #0D0D0D;
    font-weight: bold;
    font-size: 1.2em;
    display: inline-block;

    ${media.phoneM`
        font-size: 1.3em;
    `}
`

const Price = styled.div`
    display: inline-block;
    position: absolute;
    right: 0px;


    ${media.phoneM`
        font-size: 1.1em;
    `}
`

const Description = styled.div`

`

const AddCartBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 80vw;
    background: #0D0D0D;
    cursor: pointer;
    border: 2px solid #0D0D0D;  
    border-radius: 4px;
    margin: 14px 0px 14px 0px;

    :hover {
        background: #fdfdfd;
    }

    :hover span {
        color: #0D0D0D;
    }
`

const AddSpan = styled.span`
    color: #fdfdfd;
    font-size: 1.4em;
    text-transform: uppercase;
`

const ConstantDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Include = styled.div`
    padding: 4px 0px 4px 0px;
`

class SingularItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPic: 1
        }
    }

    changeMainPicForward = () => {
        if (this.state.mainPic <= 4) {
            this.setState(prevState => {
                return {
                    mainPic: prevState.mainPic + 1
                }
            })
        } else if (this.state.mainPic === 5) {
            this.setState({
                mainPic: 1
            })
        }
    }

    changeMainPicBackward = () => {
        if (this.state.mainPic >= 2) {
            this.setState(prevState => {
                return {
                    mainPic: prevState.mainPic - 1
                }
            })
        } else if (this.state.mainPic === 1) {
            this.setState({
                mainPic: 5
            })
        }
    }

    handleCart = () => {
        this.props.addToCart(this.props.id)
    }

    render() {

        const filteredPostArr = filterById(this.props.nails, this.props.id);
        const filteredPostObj = filteredPostArr[0];

        const name = getNested(['name'], filteredPostObj),
            description = getNested(['description'], filteredPostObj),
            price = (getNested(['price'], filteredPostObj) / 100),
            picturesArr = getNested(['pictures'], filteredPostObj),
            mainPicUrl = picturesArr[0],
            secondPicUrl = picturesArr[1],
            thirdPicUrl = picturesArr[2],
            fourthPicUrl = picturesArr[3],
            fithPicUrl = picturesArr[4],
            quantity = getNested(['quantity'], filteredPostObj);


        return (
            <Container>
                <Helmet titleTemplate='%s | Rave Nailz'>
                    <title>{name}</title>
                    <meta name='description' content={description}></meta>
                    <meta name='keywords' content={Meta.keywords}></meta>
                </Helmet>
                <ImgContainer>
                    <SubtractOne onClick={this.changeMainPicBackward}></SubtractOne>
                    <PicSwitchMain
                        mainPic={this.state.mainPic}
                        mainPicUrl={mainPicUrl}
                        secondPicUrl={secondPicUrl}
                        thirdPicUrl={thirdPicUrl}
                        fourthPicUrl={fourthPicUrl}
                        fithPicUrl={fithPicUrl} />
                    <AddOne onClick={this.changeMainPicForward}></AddOne>
                </ImgContainer>
                <StuffDiv>
                    <Quantity>
                        {quantity != null &&
                            <div><span>Quantity: </span>{quantity}</div>
                        }
                    </Quantity>
                    <PositionDiv>
                        <Name>{name}</Name>
                        <Price><Currency quantity={price} symbol='$' locale='en' /></Price>
                    </PositionDiv>
                    <Description>{description}</Description>
                    <AddCartBtn onClick={this.handleCart}>
                        <AddSpan>Add To Cart</AddSpan>
                    </AddCartBtn>
                    <ConstantDiv>
                        <div>Ready to ship in 3-5 days.</div>
                        <Include>All sets include:</Include>
                        <div>Nail Glue + Nail File</div>
                    </ConstantDiv>
                </StuffDiv>
            </Container>
        )
    }
}

export default withContext(SingularItem);