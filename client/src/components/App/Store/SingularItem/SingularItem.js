import React, { Component } from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter'
import Helmet from 'react-helmet'
import Modal from 'react-modal'

import { withContext } from '../../../AppContext'
import { Meta } from '../../../Shared/Meta'
import { filterById, getNested, filterByNotId } from '../../../Shared/HelperFunctions'
import { customModalStyles } from '../../../Shared/StyleConstants'

import media from '../../../../theme/Device'
import Copy2Clip from './Copy2Clip'
import Others from './OtherList'
import SlideShow from './SlideShow'

import ShareIcon from '../../../../assets/icons/share_black.svg'

const Container = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;

    ${media.laptop`
        margin-top: 130px;
    `}
`

const FlexDiv = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;

    ${media.tablet`
        display: grid;
        grid-template-columns: 57vw 43vw;
    `}

    ${media.laptop`
        display: grid;
        grid-template-columns: 65vw 35vw;
    `}
`

const StuffDiv = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    padding: 20px 26px 20px 26px;

    ${media.tablet`
        padding: 40px 30px 20px 40px;
    `}  

    ${media.laptop`
        padding: 30px 30px 20px 20px;
    `}  

    ${media.laptopL`
        padding: 30px 60px 20px 10px;
    `} 

    ${media.laptopLM`
        padding: 30px 120px 20px 0px;
    `} 

     ${media.laptopLL`
        padding: 30px 160px 20px 0px;
    `} 
`

const Quantity = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    color: #d63c4f;
    font-size: 0.9em;

    ${media.phoneM`
        font-size: 1em;
    `}

    ${media.tablet`
        font-size: 1.1em;
    `}
`

const PositionDiv = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    position: relative;
    padding: 4px 0px 4px 0px;

    ${media.tablet`
        padding: 6px 0px 20px 0px;
    `}
`

const Name = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    display: inline-block;
    color: #0D0D0D;
    font-size: 1.2em;
    font-weight: bold;

    ${media.phoneM`
        font-size: 1.3em;
        font-weight: 900;
    `}

    ${media.tablet`
        font-size: 1.5em;
    `}
`

const Price = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    position: absolute;
    right: 0px;
    display: inline-block;

    ${media.phoneM`
        font-size: 1.2em;
    `}

    ${media.phoneL`
        right: 6px;
    `}

    ${media.tablet`
        font-size: 1.5em;
        font-weight: bold;
    `}
`

const Description = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;

    ${media.phoneM`
        font-size: 1.1em;
    `}

    ${media.tablet`
        font-size: 1.2em;
        padding: 0px 0px 20px 0px;
    `}
`

const AddCartBtn = styled.div`
    transition: width ease 0.5s;
        -o-transition: width ease 0.5s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0D0D0D;
    height: 60px;
    width: 80vw;
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

    ${media.tablet`
        width: 32vw;
    `}

    ${media.laptop`
        width: 30vw;
    `}

    ${media.laptopL`
        width: 29vw;
    `}

    ${media.laptopLM`
        width: 26vw;
    `}

    ${media.laptopLL`
        width: 24vw;
    `}
`

const AddSpan = styled.span`
    color: #fdfdfd;
    font-size: 1.4em;
    text-transform: uppercase;
`

const ConstantDiv = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${media.phoneM`
        font-size: 1.1em;
    `}

    ${media.tablet`
        font-size: 1.2em;
    `}
`

const Include = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    padding: 4px 0px 4px 0px;

    ${media.tablet`
        font-size: 1.1em;
    `}
`

const Ready = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;

    ${media.tablet`
        font-size: 1.1em;
    `}
`

const File = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    
    ${media.tablet`
        font-size: 1.1em;
    `}
`

const ShareDiv = styled.div`
    cursor: pointer;
    position: relative;
    padding: 10px 0px 10px 0px;

    :hover span{
        text-decoration: underline;
    }

    ${media.tablet`
        padding: 30px 0px 30px 0px;
    `}
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
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 30px;
    background: none;
    color: #fffdfd;
    font-size: 2em;
    height: 30px;
    width: 30px;

    :hover {
        color: #D63C4F;
    }
`

const OtherDiv = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;

    ${media.tablet`
        padding: 40px 0px 0px 0px;
    `}
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
        const filteredPostArr = filterById(this.props.nails, this.props.id),
            filteredPostObj = filteredPostArr[0];

        const name = getNested(['name'], filteredPostObj),
            description = getNested(['description'], filteredPostObj),
            price = (getNested(['price'], filteredPostObj) / 100),
            picturesObj = getNested(['pictures'], filteredPostObj),
            mainPicUrl = getNested(['0'], picturesObj);

        const userJSON = localStorage.getItem('user')
        const user = JSON.parse(userJSON)

        if (user) {
            let data = {
                id: this.props.id,
                name: name,
                description: description,
                price: price,
                pic: mainPicUrl,
                username: user.username
            }
            this.props.addToCart(data)
        } else {
            let data = {
                id: this.props.id,
                name: name,
                description: description,
                price: price,
                pic: mainPicUrl,
            }
            this.props.addToCart(data)
        }
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

    componentDidUpdate() {
        if (this.state.showModal) {
            document.body.style.overflow = 'hidden';
        }
    }

    render() {
        const filteredPostArr = filterById(this.props.nails, this.props.id),
            filterNotIncludedArr = filterByNotId(this.props.nails, this.props.id),
            filteredPostObj = filteredPostArr[0];

        const name = getNested(['name'], filteredPostObj),
            description = getNested(['description'], filteredPostObj),
            price = (getNested(['price'], filteredPostObj) / 100),
            quantity = getNested(['quantity'], filteredPostObj),
            picturesObj = getNested(['pictures'], filteredPostObj),
            mainPicUrl = getNested(['0'], picturesObj),
            secondPicUrl = getNested(['1'], picturesObj),
            thirdPicUrl = getNested(['2'], picturesObj),
            fourthPicUrl = getNested(['3'], picturesObj),
            fithPicUrl = getNested(['4'], picturesObj);

        return (
            <Container>
                <Helmet titleTemplate='%s | Rave Nailz'>
                    <title>{name}</title>
                    <meta name='description' content={description}></meta>
                    <meta name='keywords' content={Meta.keywords}></meta>
                </Helmet>
                <FlexDiv>
                    <SlideShow
                        mainPic={this.state.mainPic}
                        mainPicUrl={mainPicUrl}
                        secondPicUrl={secondPicUrl}
                        thirdPicUrl={thirdPicUrl}
                        fourthPicUrl={fourthPicUrl}
                        fithPicUrl={fithPicUrl}
                        forward={this.changeMainPicForward}
                        back={this.changeMainPicBackward} />
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
                            <Ready>Ready to ship in 3-5 days.</Ready>
                            <Include>All sets include:</Include>
                            <File>Nail Glue + Nail File</File>
                        </ConstantDiv>
                    </StuffDiv>
                </FlexDiv>
                <OtherDiv>
                    <Others notIncluded={filterNotIncludedArr} />
                </OtherDiv>
                <Modal isOpen={this.state.showModal}
                    contentLabel='Sharing to different social platforms modal'
                    onRequestClose={this.closeModal}
                    style={customModalStyles}>
                    <Copy2Clip img={mainPicUrl}
                        description={description}
                        location={this.props.location} />
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