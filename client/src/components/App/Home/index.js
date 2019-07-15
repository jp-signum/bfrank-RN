import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import { withContext } from '../../AppContext'
import { Meta } from '../../Shared/Meta'

import media from '../../../theme/Device'

import MailChimp from '../../Shared/Mailchimp'
import OutboundLink from '../../Shared/OutboundLink'

import MainLogoDark from '../../../assets/icons/main_logo_dark.svg'
import rSvg from '../../../assets/icons/R_white.svg'

const LandingContainer = styled.div`
    background: #0D0D0D;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const LandingLogo = styled.img`
    width: 4.8vw;
    transition: ease 0.5s;
    position: absolute;
    top: 12px;
    left: 12px;

    ${media.phoneS`
        width: 5.2vw;
    `}

    ${media.phoneM`
        width: 6vw;
    `}

    ${media.phoneL`
        width: 6.4vw;
    `}

    ${media.phoneLL`
        width: 6.8vw;
    `}

    ${media.tablet`
        width: 5vw;
        top: 16px;
        left: 16px;
    `}

    ${media.laptop`
        width: 4vw;
        left: 20px;
    `}

    ${media.laptopL`
        width: 3vw;
    `}

    ${media.laptopLL`
        width: 2vw;
    `}
    ${media.desktop`
        width: 1vw;
    `}

    ${media.desktopL`
        width: .5vw;
    `}
`

const InfoContainer = styled.div`
    text-align: center;
    transition: ease 0.5s;
    width: 250px;
    padding-top: 10px;

    ${media.phoneS`
        padding-top: 24px;
        width: 260px;
    `}

    ${media.phoneM`
        width: 290px;
        padding-top: 0px;
    `}

    ${media.phoneLL`
        width: 350px;
    `}

    ${media.tablet`
        width: 400px;
    `}
    
`

const ShopDiv = styled.div`
    background: #0D0D0D;
    border: 2px solid #fdfdfd;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 6px 0px 6px 0px;
    letter-spacing: 1.8px;
    font-size: 1.2em;
    transition: ease 0.5s;
    cursor: pointer;
    margin-bottom: 12px;

    :hover {
        background: #fdfdfd;
    }

    :hover > a span {
        color: #0D0D0D;
    }

    ${media.phoneS`
        font-size: 1.3em;
        margin-bottom: 14px;
        padding: 7px 0px 7px 0px;
    `}

    ${media.phoneM`
        font-size: 1.4em;
        margin-bottom: 20px;
        padding: 8px 0px 8px 0px;
    `}

    ${media.phoneLL`
        margin-bottom: 30px;
    `}
`
const ShopSpan = styled.span`
    color: #fdfdfd;
`

const MailDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const SubscribeDiv = styled.div`
    text-transform: uppercase;
    background:  #0D0D0D;
    color: #fdfdfd;
    font-size: 1.2em;
    letter-spacing: 1.8px;
    border-top: #fdfdfd 2px solid;
    border-left: #fdfdfd 2px solid;
    border-right: #fdfdfd 2px solid;
    border-radius: 4px 4px 0px 0px;
    padding: 6px 0px 6px 0px;
    transition: ease 0.5s;

    ${media.phoneS`
        font-size: 1.3em;
        padding: 7px 0px 7px 0px;
    `}

    ${media.phoneM`
        font-size: 1.4em;
        padding: 8px 0px 8px 0px;
    `}
`

const ListDescriptionDiv = styled.div`
    transition: ease 0.5s;
    padding: 8px 8px 8px 8px;
    color: #0D0D0D;

    ${media.phoneS`
        padding: 9px 9px 9px 9px;
    `}
    
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
    background: white;
    border-radius: 0px 0px 4px 4px;
`

const SocialContainer = styled.div`
   color: rgba(253, 252, 252, 0.3);
   padding-top: 12px;
`

const SociallinkDiv = styled.div`
    display: inline;
    padding-right: 6px;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        padding: 0px 8px 0px 0px; 
    `}
`

const SociallinkDivD1 = styled(SociallinkDiv)`
   font-size: 0.7em;
   position: relative;
   bottom: 2px;
   color: rgb(214, 60, 79, 0.8);
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


function Home(props) {
    const cartCount = props.localCart.length

    return (
        <LandingContainer>
            <Helmet titleTemplate="%s | Rave Nailz">
                <title>{Meta.title}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <LandingLogo src={rSvg} alt='rSvg' />
            <InfoContainer>
                <ShopDiv>
                    <ReactGA.OutboundLink
                        eventLabel='toEtsy'
                        to='//www.etsy.com/shop/ravenailz'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ textDecoration: 'none' }}>
                        <ShopSpan>shop our nails</ShopSpan>
                    </ReactGA.OutboundLink>
                </ShopDiv>
                <MailDiv>
                    <SubscribeDiv>join the crew</SubscribeDiv>
                    <WhiteContainer>
                        <ListDescriptionDiv>Subcribe to our email newsletter to recieve <span style={{ fontWeight: 'bold' }}>exclusive</span> product drops, discounts, giveaways, and more.</ListDescriptionDiv>
                        <Rsvg src={MainLogoDark} alt='mainLogoDark' />
                        <MailChimp />
                    </WhiteContainer>
                </MailDiv>
                <SocialContainer>
                    <SociallinkDiv>
                        <OutboundLink spanText='Instagram'
                            eventLabel='toInstagram'
                            to='//www.instagram.com/rave_nailz/'
                            shop='false' />
                    </SociallinkDiv>
                    <SociallinkDivD1>&#x2662;</SociallinkDivD1>
                    <SociallinkDiv>
                        <OutboundLink spanText='Facebook'
                            eventLabel='toFacebook'
                            to='//www.facebook.com/RaveNailz/'
                            shop='false' />
                    </SociallinkDiv>
                </SocialContainer>
            </InfoContainer>
        </LandingContainer>
    )
}

export default withContext(Home);