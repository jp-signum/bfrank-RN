import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

import { ContactInfo } from '../../Shared/ParagraphStrings'
import { customModalStyles } from '../../Shared/StyleConstants'
import OutboundLink from '../../Shared/OutboundLink'
import Copyright from './Copyright'
import media from '../../../theme/Device'
import LinkSpan from '../../Shared/LinkSpan'

const Container = styled.div`
    position: relative;
    width: 100%;
    background: #0D0D0D;
    color: #fdfdfd;
    padding: 4%;
    display: flex;
    flex-direction: column;

    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
    `}
`

const FlexContainer = styled.div`
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

    ${media.tablet`
        text-align: right;
        padding-right: 9%;
    `}

    ${media.laptop`
        white-space: nowrap;
        padding: 0px 30px 10px 130px;
    `}

    ${media.laptopL`
        padding: 0px 30px 10px 220px;
    `}

    ${media.laptopLM`
        padding: 0px 30px 10px 400px;
    `}

    ${media.laptopLL`
        padding: 0px 30px 10px 470px;
    `}
`

const FeatureDiv = styled.div`
    position: relative;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

    ${media.tablet`
        max-width: 54%;
    `}

    ${media.laptop`
        padding-left: 30px;
        max-width: 50%;
    `}

    ${media.laptopL`
        max-width: 44%;
    `}   

    ${media.laptopLM`
        max-width: 38%;
    `}          
`

const FeatureDescriptionDiv = styled.div`
    width: 94%;
    position: relative;
    font-weight: 540;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;
    font-size: 1.3em;
    line-height: 1.2em;
      
    ${media.phoneM`
        font-size: 1.4em;
    `}
          
    ${media.phoneL`
        font-size: 1.5em;
    `}
          
    ${media.tablet`
        padding: 0px 0px 0px 0px; 
    `}

    ${media.laptop`
        font-size: 2em;    
    `}
`

const SocialContainer = styled.div`
    padding: 10px 0px 12px 0px;
    letter-spacing: .04em;
    font-size: 1.1em;
`

const SociallinkDiv = styled.div`
    display: inline;
    padding-right: 6px;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        padding: 0px 0px 0px 0px; 
    `}
`
const SociallinkDivD = styled(SociallinkDiv)`
   font-size: 0.6em;
   position: relative;
   bottom: 2px;
   color: rgb(214, 60, 79, 0.8);
`

const FooterInfoDiv1 = styled.div`
    font-size: 1.1em;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;
    padding: 2px 0px 10px 0px;

    ${media.tablet`
        font-size: 1.2em;    
    `}

    ${media.laptop`
        font-size: 1.3em;    
    `}    
`

const FooterInfoDiv2 = styled.div`
    transition:all ease 0.5s;
    -o-transition: all .5s ease;
    padding: 10px 0px 2px 0px;
    transition:all ease 0.5s;
        -o-transition: all .5s ease;
          
    ${media.tablet`
        font-size: 1em;    
    `}

    ${media.laptop`
        font-size: 1em;    
    `}
`

const ModalSpan = styled.span`
    background-image: linear-gradient(120deg, #090404 10%, #D63C4F 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    cursor: pointer;

    :hover {
        background-size: 100% 88%;
    }
`

const EmailSpace = styled.div`
    letter-spacing: 0.12em;
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

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
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

    componentDidUpdate() {
        if (this.state.showModal) {
            document.body.style.overflow = 'hidden';
        }
    }

    render() {
        return (
            <Container>
                <FeatureDiv>
                    <FeatureDescriptionDiv>
                        <span>Need help applying your nails — check out our <LinkSpan to='/about' spanText='instruction' color='#fdfdfd' /> page. Don't forget to <ModalSpan onClick={this.openModal}>sign up</ModalSpan> for our newsletter to recieve <span>exclusive</span> product drops, discounts, and more.</span>
                    </FeatureDescriptionDiv>
                </FeatureDiv>
                <FlexContainer>
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
                    <FooterInfoDiv1>
                        <div>{ContactInfo.ContactPhone}</div>
                        <EmailSpace>{ContactInfo.ContactEmail}</EmailSpace>
                    </FooterInfoDiv1>
                    <FooterInfoDiv2>
                        <Copyright />
                    </FooterInfoDiv2>
                </FlexContainer>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel='Mailchimp signup modal'
                    onRequestClose={this.closeModal}
                    style={customModalStyles}>
                    <div>test</div>
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