import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ContactInfo, SocialHrefs } from '../../Shared/ParagraphStrings'

import OutboundLink from '../../Shared/OutboundLink'
import Copyright from './Copyright'
import media from '../../../theme/Device'
import NewsletterModal from '../../Shared/NewsletterModal'

import RLogoWhite from '../../../assets/icons/R_white.svg'
import RLogoRed from '../../../assets/icons/R_red.svg'

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
   font-size: 0.7em;
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

    ${media.laptop`
        padding: 0px 0px 0px 6px;
    `}
`

const EmailSpace = styled.div`
    letter-spacing: 0.12em;
    font-size: 0.9em;
`

const RFooterImg = styled.img`
    width: 36px;
    position: absolute;
    top: 40px;
    left: 60px;
    cursor: pointer;
`

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLaptop: false
        };
        this.newsModal = React.createRef()
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

    handleOpenModal = () => {
        this.newsModal.current.openModal()
    }

    componentDidMount() {
        this.setWindow()
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        return (
            <Container>
                {this.state.isLaptop &&
                    <Link to='/'>
                        <RFooterImg
                            src={RLogoWhite}
                            onMouseOver={e => (e.currentTarget.src = RLogoRed)}
                            onMouseOut={e => (e.currentTarget.src = RLogoWhite)} />
                    </Link>
                }
                <FlexContainer>
                    <FooterInfoDiv1>{ContactInfo.ContactPhone}</FooterInfoDiv1>
                    <EmailSpace>{ContactInfo.ContactEmail}</EmailSpace>
                    <FeatureDiv>
                        <Link style={{ display: 'inline-block' }} to='/about'><InstructionSpan>Instructions</InstructionSpan></Link>
                        <SociallinkDivD1>&#x2662;</SociallinkDivD1>
                        <Link style={{ display: 'inline-block', paddingLeft: '6px' }} to='/store/productList'><InstructionSpan>Nails</InstructionSpan></Link>
                    </FeatureDiv>
                    <SocialContainer>
                        <SociallinkDiv>
                            <OutboundLink spanText='Instagram'
                                eventLabel='toInstagram'
                                to={SocialHrefs.instaH} />
                        </SociallinkDiv>
                        <SociallinkDivD>&#x2662;</SociallinkDivD>
                        <SociallinkDiv>
                            <OutboundLink spanText='Facebook'
                                eventLabel='toFacebook'
                                to={SocialHrefs.fbH} />
                        </SociallinkDiv>
                        <SociallinkDivD>&#x2662;</SociallinkDivD>
                        <ModalSpan onClick={this.handleOpenModal}>Newsletter</ModalSpan>
                    </SocialContainer>
                    <TermsDiv>
                        <Copyright />
                        <Link to='/terms-conditions'><TermsSpan>Terms & Conditions</TermsSpan></Link>
                        <Link to='/privacy-policy'><TermsSpan>Privacy Policy</TermsSpan></Link>
                    </TermsDiv>
                </FlexContainer>
                <NewsletterModal ref={this.newsModal}/>
            </Container>
        )
    }
}

export default Footer;