import React from 'react'
import styled from 'styled-components'

import { About, SocialHrefs } from '../../Shared/ParagraphStrings'

import MainPics from './MainPics'
import SecondaryPics from './SecondaryPics'
import OutboundLinkU from '../../Shared/OutboundLinkU'
import media from '../../../theme/Device'
import HowTo from './HowTo'


const Container = styled.div`
    background: #0D0D0D;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fdfdfd;
    padding-top: 70px;

    ${media.phoneL`
        padding: 100px 10px 0px 10px;
    `}

    ${media.tablet`
        padding: 140px 100px 0px 100px;
    `}
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    text-align: center;
    font-size: 1.4em;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 0px 12px 0px 12px;

    ${media.phoneL`
        font-size: 1.6em;
    `}

    ${media.tablet`
        font-size: 2em;
        line-height: 1.45em;
    `}
`

const Info = styled.div`
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.06em;
    padding: 0px 12px 0px 12px;

    ${media.phoneL`
        font-size: 1.2em;
    `}
`

const Instructions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const VidContainer = styled.div`
    width: 95vw;
    /* box-shadow: 0px 3px 15px rgba(255, 255, 255, 0.1); */
    margin: 20px 0px 0px 0px;
`

const InstructList = styled.div`
    padding: 0px 10px 0px 0px;
`

const InstructListItem = styled.li`
    letter-spacing: 0.06em;
    padding: 4px 0px 4px 0px;
    
    ${media.phoneL`
        font-size: 1.2em;
    `}
`


function Instruct() {
    return (
        <Container>
            <Header>
                <Title>
                    {About.Title1}
                </Title>
            </Header>
            <MainPics />
            <Info>
                <span>{About.Main1}</span>
                <OutboundLinkU spanText='Instagram'
                    eventLabel='toInstagram'
                    to={SocialHrefs.instaH} />
                <span>{About.Main2}</span>
            </Info>
            <Instructions>
                <VidContainer>
                    <HowTo />
                </VidContainer>
                <InstructList>
                    <ol>
                        <InstructListItem>{About.In1}</InstructListItem>
                        <InstructListItem>{About.In2}</InstructListItem>
                        <InstructListItem>{About.In3}</InstructListItem>
                        <InstructListItem>{About.In4}</InstructListItem>
                        <InstructListItem>{About.In5}</InstructListItem>
                    </ol>
                </InstructList>
            </Instructions>
            <SecondaryPics />
        </Container>
    )
}

export default Instruct;