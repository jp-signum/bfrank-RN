import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Modal from 'react-modal'

import { customModalStyles } from '../../../Shared/StyleConstants'
import MailChimp from '../../../Shared/Mailchimp'
import OutboundLink from '../../OutboundLink'
import media from '../../../../theme/Device'

import MainLogoDark from '../../../../assets/icons/main_logo_dark.svg'

const PositionDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    right: 0;
    left: 0;
`

const SocialContainer = styled.div`
    position: absolute;
    bottom: 10%;
    left: 20.5%;
    letter-spacing: .05em;
    font-size: 1.2em;
    z-index: 2000;
    outline:  none !important;
    outline-color: none !important;
    outline-style: none !important;
    outline-width: none !important;
    -webkit-focus-ring-color: none !important;

    ${media.phoneM`
        left: 32%;
    `}

    ${media.tablet`
        left: 89%;
    `}
`

const SociallinkDiv = styled.div`
    display: inline;
    padding-right: 6px;
    z-index: 2000;
    font-size: 0.8em;
`
const SociallinkDivD = styled(SociallinkDiv)`
   font-size: .6em;
   position: relative;
   bottom: 2px;
   color: rgb(214, 60, 79, 0.8);
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

    :hover {
        color: #D63C4F;
    }
`

const CenterContainer = styled.div`
     transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
`


const MailDiv = styled.div`
    margin-top: 34%;
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    width: 260px;

    ${media.phoneM`
        width: 290px;
    `}

    ${media.phoneLL`
        width: 350px;
    `}

    ${media.tablet`
        width: 400px;
    `}
`

const SubscribeDiv = styled.div`
    text-transform: uppercase;
    background:  rgb(0, 0, 0, 0);
    color: #fdfdfd;
    letter-spacing: 1.8px;
    border-top: #fdfdfd 2px solid;
    border-left: #fdfdfd 2px solid;
    border-right: #fdfdfd 2px solid;
    border-radius: 4px 4px 0px 0px;
    font-size: 1.3em;
    padding: 7px 0px 7px 0px;
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    text-align: center;
    

    ${media.phoneM`
        font-size: 1.4em;
        padding: 8px 0px 8px 0px;
    `}
`

const ListDescriptionDiv = styled.div`
    text-align: center;
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    color: #0D0D0D;
    padding: 9px 9px 9px 9px;
    
    ${media.phoneM`
        padding: 10px 10px 10px 10px;
    `}

    ${media.tablet`
        padding: 10px 40px 12px 40px;
    `}

    ${media.laptop`
        padding: 12px 40px 12px 40px;
    `}
`

const WhiteContainer = styled.div`
    background: rgb(253,  253,  253, 1);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Rsvg = styled.img`
    height: 130px;
    transition: ease 0.5s;
    padding: 8px 8px 8px 8px;

    ${media.phoneS`
        padding: 9px 9px 9px 9px;
        height: 134px;
    `}
    
    ${media.phoneM`
        padding: 10px 0px 10px 0px;
        height: 136px;
    `}
`

class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            showModal: false
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    handleStateChange = (state) => {
        this.setState({ 
            menuOpen: state.isOpen 
        })
    }

    closeMenu = () => {
        this.setState({ 
            menuOpen: false 
        })
    }

    componentDidMount() {
        if (this.state.menuOpen === false) {
            document.body.setAttribute("style", "overflow: visible; position: static;");
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.menuOpen !== this.state.menuOpen) {
            if (this.state.menuOpen) {
                document.body.setAttribute("style", "overflow: hidden; position: fixed;");
            } else {
                document.body.setAttribute("style", "overflow: visible; position: static;");
            }
        }
    }

    render() {
        return (
            <Menu
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                burgerBarClassName={this.props.burgerBarClassName}>
                <Link onClick={this.closeMenu} to='/' id='home' className='menu-item'>Home</Link>
                <Link onClick={this.closeMenu} to='/store/productlist' id='storeProductsList' className='menu-item'>Store</Link>
                <Link onClick={this.closeMenu} to='/about' id='about' className='menu-item'>About</Link>
                <div onClick={this.openModal} className='menu-item'>Newsletter</div>

                <PositionDiv>
                    <SocialContainer>
                        <SociallinkDiv>
                            <OutboundLink spanText='Instagram'
                                eventLabel='toInstagram'
                                to='//www.instagram.com/rave_nailz/' />
                        </SociallinkDiv>
                        <SociallinkDivD>&#x2662;</SociallinkDivD>
                        <SociallinkDiv>
                            <OutboundLink spanText='Facebook'
                                eventLabel='toFacebook'
                                to='//www.facebook.com/RaveNailz/' />
                        </SociallinkDiv>
                    </SocialContainer>
                </PositionDiv>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel='Mailchimp signup modal'
                    onRequestClose={this.closeModal}
                    style={customModalStyles}>
                    <CenterContainer>
                        <MailDiv>
                            <SubscribeDiv>join the crew</SubscribeDiv>
                            <WhiteContainer>
                                <ListDescriptionDiv>Subcribe to our email newsletter to recieve <span style={{ fontWeight: 'bold' }}>exclusive</span> product drops, discounts, giveaways, and more.</ListDescriptionDiv>
                                <Rsvg src={MainLogoDark} alt='mainLogoDark' />
                                <MailChimp />
                            </WhiteContainer>
                        </MailDiv>
                    </CenterContainer>
                    <ModalCloseBtn onClick={this.closeModal}>
                        <span className="bm-cross2"></span>
                        <span className="bm-cross3"></span>
                    </ModalCloseBtn>
                </Modal>
            </Menu>
        )
    }
}

export default NavMenu;