import React, { Component } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, FacebookIcon, TwitterIcon, PinterestIcon } from 'react-share'

import media from '../../../../theme/Device'

const CenterContainer = styled.div`
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ShareContainer = styled.div`
    margin-top: 40%;
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

    ${media.laptop`
        margin-top: 200px;
    `}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const WhiteContainer = styled.div`
    background: rgb(253,  253,  253, 1);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TitleDiv = styled.div`
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

    ${media.tablet`
        font-size: 1.6em;
        padding: 10px 0px 10px 0px;
    `}

    ${media.laptop`
        padding: 12px 0px 12px 0px;
    `}
`

const ShareIcons = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;

    ${media.laptop`
        padding-top: 16px;
    `}
`

const UrlDiv = styled.div`
    border: 2px solid rgba(13, 13, 13, 0.3);
    border-radius: 4px;
    overflow-wrap: break-word;
    text-align: center;
    margin: 12px;
    padding: 4px;

    ${media.phoneM`
        margin: 14px 20px 14px 20px;
    `}

    ${media.tablet`
        margin: 20px 40px 20px 40px;
    `}
`

const ShareBtn = styled.button`
   font-size: 1em;
   color: rgba(16, 6, 6, 0.3);
   border: 2px solid rgba(13, 13, 13, 0.3);
   border-radius: 4px;
   margin: 5% 20% 8% 20%;

    :hover {
        border: 2px solid rgba(13, 13, 13, 1);
        cursor: pointer;
        color: rgba(13, 13, 13, 1);
        background: white;
    }

   ${media.tablet`
        margin: 20px 100px 30px 100px;
        padding: 6px 0px 6px 0px;
        font-size: 1.2em;
    `} 
`

class Copy2Clip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            coppied: false
        }
    }

    setValue = () => {
        this.setState({
            value: 'https://www.ravenailz.com' + this.props.location
        })
    }

    onCopy = () => {
        this.setState({
            coppied: true
        });
    }

    componentDidMount() {
        this.setValue()
    }

    render() {

        return (
            <CenterContainer>
                <ShareContainer>
                    <Container>
                        <TitleDiv>Share This Look</TitleDiv>
                        <WhiteContainer>
                            <ShareIcons>
                                <FacebookShareButton
                                    url={this.state.value}
                                    quote={this.props.description}
                                    className='facebookShare'>
                                    <FacebookIcon
                                        iconBgStyle={{ fill: '#fdfdfd' }}
                                        logoFillColor='#0D0D0D'
                                        size={52} />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={this.state.value}
                                    title={this.props.description}
                                    className='twitterShare'>
                                    <TwitterIcon
                                        iconBgStyle={{ fill: '#fdfdfd' }}
                                        logoFillColor='#0D0D0D'
                                        size={52} />
                                </TwitterShareButton>
                                <PinterestShareButton
                                    url={this.state.value}
                                    media={this.props.img}
                                    description={this.props.description}
                                    className='pinterestShare'>
                                    <PinterestIcon
                                        iconBgStyle={{ fill: '#fdfdfd' }}
                                        logoFillColor='#0D0D0D'
                                        size={52} />
                                </PinterestShareButton>
                            </ShareIcons>
                            <UrlDiv>{'https://www.ravenailz.com' + this.props.location}</UrlDiv>
                            <CopyToClipboard
                                onCopy={this.onCopy}
                                text={this.state.value}>
                                <ShareBtn>
                                    {this.state.coppied
                                        ? <span>COPPIED!</span>
                                        : <span>COPY URL</span>
                                    }
                                </ShareBtn>
                            </CopyToClipboard>
                        </WhiteContainer>
                    </Container>
                </ShareContainer>
            </CenterContainer>
        )
    }
}

export default Copy2Clip;