import React from 'react'
import styled from 'styled-components'

import { Terms } from '../../Shared/ParagraphStrings'

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

function Conditions() {
    return (
        <Container>
            <CenterDiv>
                <Title>Terms & Conditions</Title>
            </CenterDiv>
            <Header>Rave Nailz</Header>
            <Header>TERMS OF SERVICE</Header>
            <Update>Last Updated on July 20th, 2019</Update>
            <div>
                <Content>{Terms.T1}</Content>
                <Content>{Terms.T2}</Content>
                <Content>{Terms.T3}</Content>
                <Content>{Terms.T4}</Content>
                <Content>By accessing or using the Services:</Content>
                <ol>
                    <li>{Terms.SL1}</li>
                    <li>{Terms.SL2}</li>
                    <li>{Terms.SL3}</li>
                    <li>{Terms.SL4}</li>
                </ol>
                <Content>1. Accessing the Site.</Content>
                <Content>{Terms.A1}</Content>
                <Content>1. Account Registration and Account Security.</Content>
                <Content>{Terms.ACC1}</Content>
                <Content>{Terms.ACC2}</Content>
                <Content>{Terms.ACC3}</Content>
                <Content>1. Prohibited Uses.</Content>
                <Content>{Terms.P1}</Content>
                <Content>{Terms.P2}</Content>
                <ul>
                    <li>{Terms.PL1}</li>
                    <li>{Terms.PL2}</li>
                    <li>{Terms.PL3}</li>
                    <li>{Terms.PL4}</li>
                    <li>{Terms.PL5}</li>
                    <li>{Terms.PL6}</li>
                    <li>{Terms.PL7}</li>
                    <li>{Terms.PL8}</li>
                    <li>{Terms.PL9}</li>
                    <li>{Terms.PL10}</li>
                    <li>{Terms.PL11}</li>
                    <li>{Terms.PL12}</li>
                    <li>{Terms.PL13}</li>
                    <li>{Terms.PL14}</li>
                    <li>{Terms.PL15}</li>
                    <li>{Terms.PL16}</li>
                    <li>{Terms.PL17}</li>
                    <li>{Terms.PL18}</li>
                    <li>{Terms.PL19}</li>
                    <li>{Terms.PL20}</li>
                </ul>
                <Content>{Terms.P3}</Content>
                <ol>
                    <li>
                        {Terms.IP1}
                    </li>
                </ol>
               <Content>{Terms.IP2}</Content>
               <ol>
                   <li>{Terms.IPL1}</li>
                   <li>{Terms.IPL2}</li>
               </ol>
               <Content>{Terms.IP3}</Content>
               <Content>1. No Guarantee of Service.</Content>
                <Content>{Terms.NGS}</Content>
                <Content>1. Disclaimer of Warranties.</Content>
                <Content>{Terms.DOW1}</Content>
                <Content>{Terms.DOW2}</Content>
                <Content>1. Limit of Liability.</Content>
                <Content>{Terms.LL}</Content>
                <Content>1. Indemnification.</Content>
                <Content>{Terms.I}</Content>
                <Content>1. Governing Law.</Content>
                <Content>{Terms.GL}</Content>
                <ol>
                    <li>{Terms.A1}</li>
                </ol>
                <ol>
                    <li>{Terms.AL1}</li>
                    <li>{Terms.AL2}</li>
                </ol>
                <Content>1. General Terms.</Content>
                <Content>{Terms.GT}</Content>
                <Content>1. Contact.</Content>
                <Content>{Terms.C}</Content>
                <Content>* * * * *</Content>
                <Content>Customer Addendum</Content>
                <Content>{Terms.CA1}</Content>
                <Content>{Terms.CA2}</Content>
                <Content>{Terms.CA3}</Content>
                <Content>{Terms.CA4}</Content>
            </div>
        </Container>
    )
}

export default Conditions;