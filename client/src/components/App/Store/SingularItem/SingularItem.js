import React, { Component } from 'react'
import styled from 'styled-components'
import { withContext } from '../../../AppContext'
import Currency from 'react-currency-formatter'
import Helmet from 'react-helmet'
import Modal from 'react-modal'

import { Meta } from '../../../Shared/Meta'
import { filterById, getNested, filterByNotId } from '../../../Shared/HelperFunctions'
import { customModalStyles } from '../../../Shared/StyleConstants'

import media from '../../../../theme/Device'
import PicSwitchMain from './PicSwitchMain'
import Copy2Clip from './Copy2Clip'

import ShareIcon from '../../../../assets/icons/share_black.svg'

const Container = styled.div`

`

const ImgContainer = styled.div`
    width: 100%;
    display: relative;
    height: 400px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.11);

    ${media.tablet`
        width: 57.5%;
        height: 620px;
        margin-left: 10px;
    `}
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

    ${media.tablet`
        right: 43%;
        top: 400px;
        border-width: 0 2.5px 2.5px 0;
        padding: 16px;
    `}  
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

    ${media.tablet`
        left: 24px;
        top: 400px;
        border-width: 0 2.5px 2.5px 0;
        padding: 16px;
    `}  
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
        font-size: 1.1em;
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
        font-weight: 900;
    `}
`

const Price = styled.div`
    display: inline-block;
    position: absolute;
    right: 0px;


    ${media.phoneM`
        font-size: 1.2em;
    `}

    ${media.phoneL`
        right: 6px;
    `}
`

const Description = styled.div`
    ${media.phoneM`
        font-size: 1.1em;
    `}
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

    ${media.phoneM`
        width: 85vw;
    `}
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

    ${media.phoneM`
        font-size: 1.1em;
    `}
`

const Include = styled.div`
    padding: 4px 0px 4px 0px;
`

const FlexDiv = styled.div`

`

const ShareDiv = styled.div`
    position: relative;
    padding-bottom: 4px;
    cursor: pointer;

    :hover span{
        text-decoration: underline;
    }
`

const ShareImg = styled.img`
    display: inline-block;
    width: 30px;
`

const ShareSpan = styled.span`
    position: relative;
    font-size: 1.3em;
    bottom: 8px;
`

const ModalCloseBtn = styled.button`
position: absolute;
right: 30px;
top: 30px;
cursor: pointer;
background: none;
color: #fffdfd;
height: 30px;
width: 30px;
font-size: 2em;
transition: ease 0.5s;

:hover {
    color: #D63C4F;
}
`

Modal.setAppElement(document.getElementById('root'));

class SingularItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPic: 1,
            showModal: false,
        }
    }

    // setWindow = () => {
    //     if (window.innerWidth > 760) {
    //         this.setState({
    //             isTablet: true
    //         })
    //     }
    // }

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

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        document.body.style.overflow = 'unset';
        this.setState({
            showModal: false
        });
    }


    // //  perhaps need to throttle this for performance, import throttle from 'lodash.throttle'; but also nobody should actually be resizing this unless your a dev checking on things
    // handleWindowResize = (y) => {
    //     this.setState({
    //         isLaptop: y
    //     })
    // }

    // onResize = () => {
    //     if (window.innerWidth > 760) {
    //         this.handleWindowResize(true)
    //     } else {
    //         this.handleWindowResize(false)
    //     }
    // }

    componentDidUpdate() {
        if (this.state.showModal) {
            document.body.style.overflow = 'hidden';
        }
    }

    // componentDidMount() {
    //     this.setWindow()
    //     window.addEventListener('resize', this.onResize)
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.onResize)
    // }

    render() {
        const filteredPostArr = filterById(this.props.nails, this.props.id),
            filterNotIncludedArr = filterByNotId(this.props.nails, this.props.id),
            filteredPostObj = filteredPostArr[0];

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
                <FlexDiv>
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
                            {quantity <= 30 &&
                                <div>{quantity}<span> remaining</span></div>
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
                            <ShareDiv onClick={this.openModal}>
                                <ShareSpan>Share this look  </ShareSpan>
                                <ShareImg src={ShareIcon} alt='share this look' />
                            </ShareDiv>
                            <div>Ready to ship in 3-5 days.</div>
                            <Include>All sets include:</Include>
                            <div>Nail Glue + Nail File</div>
                        </ConstantDiv>
                    </StuffDiv>
                </FlexDiv>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel='Sharing to different social platforms modal'
                    onRequestClose={this.closeModal}
                    style={customModalStyles}>
                    <Copy2Clip 
                        img={mainPicUrl}
                        description={description}
                        location={this.props.location}/>     
                    <ModalCloseBtn onClick={this.closeModal}>
                        <span className="bm-cross2"></span>
                        <span className="bm-cross3"></span>
                    </ModalCloseBtn>
                </Modal>
            </Container>
        )
    }
}

export default withContext(SingularItem);