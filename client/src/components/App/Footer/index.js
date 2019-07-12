import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { ContactInfo } from '../../Shared/ParagraphStrings'
import { customModalStyles } from '../../Shared/StyleConstants'

import MailChimp from '../../Shared/Mailchimp'
import OutboundLink from '../../Shared/OutboundLink'
import Copyright from './Copyright'
import media from '../../../theme/Device'

import MainLogoDark from '../../../assets/icons/main_logo_dark.svg'
import R

const Container = styled.div`
    position: relative;
    width: 100%;
    background: #0D0D0D;
    color: #fdfdfd;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FeatureDiv = styled.div`
    padding: 20px 0px 0px 0px;
`

const InstructionSpan = styled.div`
    letter-spacing: .08em;
    font-size: 1.1em;
     transition:all ease 0.5s;
    -o-transition: all .5s ease;
    color: rgba(253, 253, 253, 0.45);
    cursor: pointer;

    :hover {
        color: rgba(253, 253, 253, 1);
    }

    ${media.phoneM`
        font-size: 1.2em;
    `}
`

const SocialContainer = styled.div`
    letter-spacing: .04em;
    font-size: 1.1em;

    ${media.phoneM`
        font-size: 1.2em;
    `}
`

const SociallinkDiv = styled.div`
    display: inline;
    padding-right: 6px;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        padding: 0px 0px 0px 8px; 
    `}
`

const SociallinkDivD1 = styled(SociallinkDiv)`
   font-size: 0.6em;
   position: relative;
   bottom: 2px;
   color: rgb(214, 60, 79, 0.8);
   padding-left: 6px;
`

const SociallinkDivD = styled(SociallinkDiv)`
   font-size: 0.6em;
   position: relative;
   bottom: 2px;
   color: rgb(214, 60, 79, 0.8);
`

const FooterInfoDiv1 = styled.div`
    font-size: 0.9em;
    padding: 12px 0px 0px 0px; 


    ${media.phoneM`
        font-size: 1.0em;
        padding: 16px 0px 0px 0px; 
    `}
`

const TermsDiv = styled.div`
    font-size: 0.65em;
    padding: 12px 0px 12px 0px;

    ${media.phoneM`
        font-size: 0.75em;
        padding: 16px 0px 14px 0px;
    `}

    ${media.phoneL`
        font-size: 0.8em;
        padding: 16px 0px 16px 0px;
    `}
`

const TermsSpan = styled.span`
     transition:all ease 0.5s;
    -o-transition: all .5s ease;
    color: rgba(253, 253, 253, 0.45);
    padding: 0px 0px 0px 8px;
    cursor: pointer;

    :hover {
        color: rgba(253, 253, 253, 1);
    }
`

const ModalSpan = styled.span`
     transition:all ease 0.5s;
    -o-transition: all .5s ease;
    cursor: pointer;
    color: rgba(253, 253, 253, 0.45);

    :hover {
        color: rgba(253, 253, 253, 1);
    }
`

const EmailSpace = styled.div`
    letter-spacing: 0.12em;
    font-size: 0.9em;
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

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isLaptop: false
        };
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
        })
    }

    setWindow = () => {
        if (window.innerWidth > 1000) {
            this.setState({
                isLaptop: true
            })
        }
    }

    //  perhaps need to throttle this for performance, import throttle from 'lodash.throttle'; but also nobody should actually be resizing this unless your a dev checking on things
    handleWindowResize = (y) => {
        this.setState({
            isLaptop: y
        })
    }

    onResize = () => {
        if (window.innerWidth > 1000) {
            this.handleWindowResize(true)
        } else {
            this.handleWindowResize(false)
        }
    }

    componentDidMount() {
        this.setWindow()
        window.addEventListener('resize', this.onResize)
    }

    componentDidUpdate() {
        if (this.state.showModal) {
            document.body.style.overflow = 'hidden';
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        return (
            <Container>
                {this.state.isLaptop && 
                    <img src={}>test</div>
                }
                <FlexContainer>
                    <FooterInfoDiv1>{ContactInfo.ContactPhone}</FooterInfoDiv1>
                    <EmailSpace>{ContactInfo.ContactEmail}</EmailSpace>
                    <FeatureDiv>
                        <Link style={{ display: 'inline-block' }} to='/about'><InstructionSpan>Instructions</InstructionSpan></Link>
                        <SociallinkDivD1>&#x2662;</SociallinkDivD1>
                        <Link style={{ display: 'inline-block' }} to='/store/productList'><InstructionSpan>Nails</InstructionSpan></Link>
                    </FeatureDiv>
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
                        <SociallinkDivD>&#x2662;</SociallinkDivD>
                        <ModalSpan onClick={this.openModal}>Newsletter</ModalSpan>
                    </SocialContainer>
                    <TermsDiv>
                        <Copyright />
                         <Link to='/terms'><TermsSpan>Terms & Conditions</TermsSpan></Link>
                         <Link to='/privacy'><TermsSpan>Privacy Policy</TermsSpan></Link>
                    </TermsDiv>
                </FlexContainer>
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
            </Container>
        )
    }
}

export default Footer;