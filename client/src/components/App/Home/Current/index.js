import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Meta } from '../../../Shared/Meta'
import media from '../../../../theme/Device'
import MailChimp from './Mailchimp'

import MainLogoDark from '../../../../assets/icons/main_logo_dark.svg'
import rSvg from '../../../../assets/icons/R_dark.svg'

const LandingContainer = styled.div`
    background: #f7e7e7;
    color: #1a0606;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
        width: 7vw;
    `}

    ${media.tablet`
        width: 6vw;
        top: 16px;
        left: 16px;
    `}

    ${media.laptop`
        width: 5vw;
        left: 20px;
    `}

    ${media.laptopL`
        width: 4vw;
    `}

    ${media.laptopLL`
        width: 3vw;
    `}
    ${media.desktop`
        width: 2vw;
    `}

    ${media.desktopL`
        width: 1vw;
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
    background: #f7e7e7;
    border: 2px solid #1a0606;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 6px 0px 6px 0px;
    letter-spacing: 1.8px;
    font-size: 1.2em;
    transition: ease 0.5s;
    cursor: pointer;
    margin-bottom: 12px;

    :hover {
        background: #1a0606;

        ${media.phoneLL`
            background: #f7e7e7;
        `} 
    }

    :hover > a span {
        color: #f7e7e7;

        ${media.phoneLL`
            color: #1a0606;
        `}
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
        font-size: 1.6em;
    `}

    ${media.phoneLL`
        margin-bottom: 30px;
        background: #1a0606;
    `}
`
const ShopSpan = styled.span`
    color: #1a0606;
    transition: ease 0.5s;

    ${media.phoneLL`
        color: #f7e7e7;
    `}
    
`

const MailDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const SubscribeDiv = styled.div`
    text-transform: uppercase;
    background: #1a0606;
    color: #f7e7e7;
    font-size: 1.2em;
    letter-spacing: 1.8px;
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

    ${media.phoneS`
        padding: 9px 9px 9px 9px;
    `}
    
    ${media.phoneM`
        padding: 10px 0px 10px 0px;
    `}

    ${media.phoneL`
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
   color: rgba(26, 6, 6, 0.3);
   padding-top: 12px;
`

const SociallinkDiv = styled.div`
    display: inline;
    padding-right: 6px;
`

const StyledSpan = styled.span`
    color: rgba(26, 6, 6, 0.3);
    font-size: 0.8em;
    transition: ease 0.5s;

    :hover {
        color: rgba(26, 6, 6, 1);
    }

    ${media.phoneS`
        font-size: 0.9em;
    `}
    
    ${media.phoneM`
        font-size: 1em;
    `}
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

function Home() {
    return (
        <LandingContainer>
            <Helmet titleTemplate="Rave Nailz | %s">
                <title>{Meta.title}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <LandingLogo src={rSvg} alt='rSvg' />
            <InfoContainer>
                <ShopDiv>
                    <a
                        href='//www.etsy.com/shop/ravenailz'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ textDecoration: 'none' }}>
                        <ShopSpan>shop our nailz</ShopSpan>
                    </a>
                </ShopDiv>
                <MailDiv>
                    <SubscribeDiv>join the crew</SubscribeDiv>
                    <WhiteContainer>
                        <ListDescriptionDiv >Subcribe to our email newsletter to recieve <span style={{ fontWeight: 'bold' }}>exclusive</span> product drops, discounts, giveaways, and more.</ListDescriptionDiv>
                        <Rsvg src={MainLogoDark} alt='mainLogoDark' />
                        <MailChimp />
                    </WhiteContainer>
                </MailDiv>
                <SocialContainer>
                    <SociallinkDiv>
                        <a
                            href='//www.instagram.com/rave_nailz/'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ textDecoration: 'none' }}>
                            <StyledSpan>Instagram</StyledSpan>
                        </a>
                    </SociallinkDiv>
                    <SociallinkDiv>&#8226;</SociallinkDiv>
                    <SociallinkDiv>
                        <a
                            href='//www.facebook.com/RaveNailz/'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ textDecoration: 'none' }}>
                            <StyledSpan>Facebook</StyledSpan>
                        </a>
                    </SociallinkDiv>
                </SocialContainer>
            </InfoContainer>
        </LandingContainer>
    )
}

export default Home