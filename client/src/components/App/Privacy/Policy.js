import React from 'react'
import styled from 'styled-components'

import { Policy } from '../../Shared/ParagraphStrings'

import media from '../../../theme/Device'


const Container = styled.div`
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    padding: 12px;

    ${media.phoneM`
        padding: 15px;
    `}

    ${media.phoneL`
        padding: 20px;
    `}

    ${media.tablet`
        padding: 20px 100px 60px 100px; 
    `}

    ${media.laptop`
        padding: 8% 12% 6% 12%; 
    `}

    ${media.laptopL`
        padding: 6% 16% 6% 16%; 
    `}
`

const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.div`
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    font-size: 1.5em;
    font-weight: bold;
    padding: 18px 0px 20px 0px;
    letter-spacing: .1em;

    ${media.phoneM`
        padding: 20px 0px 24px 0px;
    `}

    ${media.phoneL`
        padding: 26px 0px 30px 0px;
        font-size: 1.6em;
    `}

    ${media.tablet`
        padding: 40px 0px 40px 0px;
        font-size: 1.8em; 
    `}
`

const Header = styled.div`
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    font-size: 1.3em;
    font-weight: bold;
    padding: 10px 0px 10px 0px;

    ${media.phoneM`
        padding: 14px 0px 14px 0px;
    `}

    ${media.phoneL`
        padding: 20px 0px 20px 0px;
        font-size: 1.4em;
    `}

    ${media.tablet`
        padding: 24px 0px 24px 0px;
        font-size: 1.6em;
    `}
`

const Update = styled.div`
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    font-size: 1.1em;
    padding: 10px 0px 10px 0px;

    ${media.phoneM`
        padding: 14px 0px 14px 0px;
    `}

    ${media.phoneL`
        padding: 20px 0px 20px 0px;
        font-size: 1.2em;
    `}

    ${media.tablet`
        padding: 24px 0px 24px 0px;
        font-size: 1.4em;
    `}
`

const Content = styled.div`
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    padding: 10px 0px 10px 0px;

    ${media.phoneM`
        padding: 14px 0px 14px 0px;
    `}

    ${media.phoneL`
        padding: 20px 0px 20px 0px;
        font-size: 1.1em;
    `}

    ${media.tablet`
        padding: 24px 0px 24px 0px;
        font-size: 1.3em;
        line-height: 1.5em;
    `}
`

const WebLink = styled.a`
    color: #060606;
    text-decoration: underline;
`

function PolicyComponent() {
    return (
        <Container>
            <CenterDiv>
                <Title>Privacy Policy</Title>
            </CenterDiv>
            <Header>Rave Nailz</Header>
            <Header>PRIVACY POLICY</Header>
            <Update>Last Updated on July 20th, 2019</Update>
            <div>
                <Content>{Policy.P1}</Content>
                <Content>{Policy.P2}</Content>
                <Content>What Information Do We Collect</Content>
                <Content>{Policy.CAA1}</Content>
                <Content>{Policy.CAA2}</Content>
                <Content>Information you give us:</Content>
                <ul>
                    <li>{Policy.IL1}</li>
                    <li>{Policy.IL2}</li>
                    <li>{Policy.IL3}</li>
                    <li>{Policy.IL4}</li>
                    <li>{Policy.IL5}</li>
                </ul>
                <Content>Information we get from your use of the Services:</Content>
                <ul>
                    <li>{Policy.SL1}</li>
                    <li>{Policy.SL2}</li>
                    <li>{Policy.SL3}</li>
                    <li>{Policy.SL4}</li>
                </ul>
                <Content>How do we use the information we collect?</Content>
                <Content>We use the information we collect to:</Content>
                <ul>
                    <li>{Policy.ICL1}</li>
                    <li>{Policy.ICL2}</li>
                    <li>{Policy.ICL3}</li>
                    <li>{Policy.ICL4}</li>
                    <li>{Policy.ICL5}</li>
                    <li>{Policy.ICL6}</li>
                    <li>{Policy.ICL7}</li>
                    <li>{Policy.ICL8}</li>
                    <li>{Policy.ICL9}</li>
                </ul>
                <Content>Do We Share Your Personal Information?</Content>
                <Content>{Policy.PI1}</Content>
                <Content>{Policy.PI2}</Content>
                <ul>
                    <li>{Policy.TPL1}</li>
                </ul>
                <Content>Protection of Company and Others</Content>
                <Content>{Policy.CO1}</Content>
                <Content>What are Cookies and Web Beacons and How Do We Use Them?</Content>
                <Content>{Policy.C1}</Content>
                <Content>{Policy.C2}</Content>
                <Content>{Policy.C3}</Content>
                <Content>{Policy.C4}</Content>
                <Content>{Policy.C5}<span> <WebLink target='_blank' href={Policy.AAW}>{Policy.AAW}</WebLink>,</span><span>or the Network Advertising Initiative’s website,</span><span> <WebLink target='_blank' href={Policy.NAIW}>{Policy.NAIW}</WebLink>.</span></Content>
                <Content>How Do We Secure Your Personal Information?</Content>
                <Content>{Policy.SPI1}</Content>
                <Content>{Policy.SPI2}</Content>
                <Content>Your Choices Regarding Information</Content>
                <Content>{Policy.YC1}</Content>
                <Content>Links to Third Party Websites</Content>
                <Content>{Policy.LTPW1}</Content>
                <Content>{Policy.LTPW1}</Content>
                <Content>How We Respond to Do Not Track Signals</Content>
                <Content>{Policy.DNT1}<span> <WebLink target='_blank' href={Policy.AADW}>{Policy.AADW}</WebLink>.</span></Content>
                <Content>Children Under 13</Content>
                <Content>{Policy.CU13}</Content>
                <Content>Unsubscribing</Content>
                <Content>{Policy.U1}</Content>
                <Content>Contact Us</Content>
                <Content>{Policy.CU1}</Content>
            </div>
        </Container>
    )
}

export default PolicyComponent;