import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

import { About, SocialHrefs } from '../../Shared/ParagraphStrings'

import MainPics from './MainPics'
import SecondaryPics from './SecondaryPics'
import OutboundLinkU from '../../Shared/OutboundLinkU'
import media from '../../../theme/Device'
import HowTo from './HowTo'

const Container = styled.div`
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
    background: #0D0D0D;
    color: #fdfdfd;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 70px;

    ${media.phoneL`
        padding: 100px 10px 0px 10px;
    `}

    ${media.tablet`
        padding: 140px 100px 0px 100px;
    `}

    ${media.laptop`
        padding: 160px 50px 50px 50px;
    `}
`

const Header = styled.div`
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${media.laptop`
        padding: 40px 0px 0px 20px;
    `}
`

const Title = styled.div`
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
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

    ${media.laptop`
        font-size: 2.5em;
        font-weight: 400;
        line-height: 1.3em;
        width: 800px;
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
    margin: 20px 0px 0px 0px;

    ${media.tablet`
        width: 74vw;
        margin: 40px 0px 20px 0px;
    `}

    ${media.laptop`
        width: 600px;
    `}
`

const InstructList = styled.div`
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
    padding: 0px 10px 0px 0px;

    ${media.tablet`
        padding: 10px 0px 20px 0px;
    `}

    ${media.laptop`
        width: 800px;
    `}
`

const InstructListItem = styled.li`
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
    letter-spacing: 0.06em;
    padding: 4px 0px 4px 0px;
    
    ${media.phoneL`
        font-size: 1.2em;
    `}

    ${media.tablet`
        font-size: 1.3em;
    `}

    ${media.laptop`
        font-size: 1.4em;
    `}
`

const WidthFix = styled.div`
    ${media.laptop`
        width: 800px;
    `}
`

class Instruct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrolledPast: false
        }
    }

    handleScrollBy = (x) => {
        this.setState({
            scrolledPast: x
        })
    }

    onScroll = () => {
        if ((window.pageYOffset || document.documentElement.scrollTop) > 310) {
            this.handleScrollBy(true)
        } else {
            this.handleScrollBy(false)
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Fade duration={2500}>
                        <Title>{About.Title1}</Title>
                    </Fade>
                </Header>
                <MainPics />
                <div className={this.state.scrolledPast ? 'scrollShow' : 'scrollHide'}>
                    <WidthFix>
                        <span>{About.Main1}</span>
                        <OutboundLinkU spanText='Instagram'
                            eventLabel='toInstagram'
                            to={SocialHrefs.instaH} />
                        <span>{About.Main2}</span>
                    </WidthFix>
                </div>
                <Instructions>
                    <VidContainer>
                        <HowTo />
                    </VidContainer>
                    <InstructList>
                        <Fade>
                            <ol>
                                <InstructListItem>{About.In1}</InstructListItem>
                                <InstructListItem>{About.In2}</InstructListItem>
                                <InstructListItem>{About.In3}</InstructListItem>
                                <InstructListItem>{About.In4}</InstructListItem>
                                <InstructListItem>{About.In5}</InstructListItem>
                            </ol>
                        </Fade>
                    </InstructList>
                </Instructions>
                <SecondaryPics />
            </Container>
        )
    }
}

export default Instruct;