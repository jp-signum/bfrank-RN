import React, { Component } from 'react'
import styled from 'styled-components'

import media from '../../../../theme/Device'
import PicSwitchMain from './PicSwitchMain'


const UpDownImgContainer = styled.div`
    width: 100%;
    display: relative;
    height: 400px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.11);
    transition:all ease 0.5s;
    -o-transition: all .5s ease;

    ${media.tablet`
        height: 540px;
        margin-left: 10px;
    `}
`

const AddOne = styled.i`
    position: absolute;
    top: 200px;
    right: 10px;
    border: solid rgb(13, 13, 13, 0.6);
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 12px;
    transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);

    ${media.tablet`
        right: 43%;
        top: 400px;
        border-width: 0 2.5px 2.5px 0;
        padding: 16px;
    `}  
`

const SubtractOne = styled.i`
    position: absolute;
    top: 200px;
    left: 10px;
    border: solid rgb(13, 13, 13, 0.6);
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 12px;
    transform: rotate(135deg);
        -webkit-transform: rotate(135deg);

    ${media.tablet`
        left: 24px;
        top: 400px;
        border-width: 0 2.5px 2.5px 0;
        padding: 16px;
    `}  
`

const HoverContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
`

const ThumbnailContainer = styled.div`
    width: 220px;
`

const ThumbnailImgContainer = styled.div`
    width: 70%;
    display: relative;
    height: 100px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.11);
    margin: 0px 0px 20px 20px;
    cursor: pointer;
`

const ThumbnailImg = styled.img`
    width: 100%;
    height: 100%;
`

const MainContainer = styled.div`
    width: 520px;
`

const MainImgContainer = styled.div`
    width: 90%;
    display: relative;
    height: 520px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.11);
    margin: 36px 20px 0px 20px;
`

const MainImg = styled.img`
    width: 100%;
    height: 100%;
`

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLaptop: false,
            isLoaded: false,
            mainHoverUrl: ''
        }
    }

    handleBack = () => {
        this.props.back();
    }

    handleForward = () => {
        this.props.forward();
    }

    setWindow = () => {
        if (window.innerWidth > 1000) {
            this.setState({
                isLaptop: true,
            })
        }
    }

    setMainPic = () => {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                mainHoverUrl: this.props.mainPicUrl
            })
        }, 100)
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

    handleMainPicHover = () => {
        this.setState({
            mainHoverUrl: this.props.mainPicUrl
        })
    }

    handleSecondPicHover = () => {
        this.setState({
            mainHoverUrl: this.props.secondPicUrl
        })
    }

    handleThirdPicHover = () => {
        this.setState({
            mainHoverUrl: this.props.thirdPicUrl
        })
    }

    handleFourthPicHover = () => {
        this.setState({
            mainHoverUrl: this.props.fourthPicUrl
        })
    }

    handleFithPicHover = () => {
        this.setState({
            mainHoverUrl: this.props.fithPicUrl
        })
    }

    componentDidMount() {
        this.setWindow()
        this.setMainPic()
        window.addEventListener('resize', this.onResize)
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        return (
            <div>
                {this.state.isLaptop
                    ? <HoverContainer>
                        <ThumbnailContainer>
                            <ThumbnailImgContainer onMouseOver={this.handleMainPicHover}>
                                <ThumbnailImg src={this.props.mainPicUrl} />
                            </ThumbnailImgContainer>
                            <ThumbnailImgContainer onMouseOver={this.handleSecondPicHover}>
                                <ThumbnailImg src={this.props.secondPicUrl} />
                            </ThumbnailImgContainer>
                            <ThumbnailImgContainer onMouseOver={this.handleThirdPicHover}>
                                <ThumbnailImg src={this.props.thirdPicUrl} />
                            </ThumbnailImgContainer>
                            <ThumbnailImgContainer onMouseOver={this.handleFourthPicHover}>
                                <ThumbnailImg src={this.props.fourthPicUrl} />
                            </ThumbnailImgContainer>
                            <ThumbnailImgContainer onMouseOver={this.handleFithPicHover}>
                                <ThumbnailImg src={this.props.fithPicUrl} />
                            </ThumbnailImgContainer>
                        </ThumbnailContainer>
                        <MainContainer>
                            <MainImgContainer>
                                <MainImg src={this.state.mainHoverUrl} />
                            </MainImgContainer>
                        </MainContainer>
                    </HoverContainer>
                    : <UpDownImgContainer>
                        <SubtractOne onClick={this.handleBack}></SubtractOne>
                        <PicSwitchMain
                            mainPic={this.props.mainPic}
                            mainPicUrl={this.props.mainPicUrl}
                            secondPicUrl={this.props.secondPicUrl}
                            thirdPicUrl={this.props.thirdPicUrl}
                            fourthPicUrl={this.props.fourthPicUrl}
                            fithPicUrl={this.props.fithPicUrl} />
                        <AddOne onClick={this.handleForward}></AddOne>
                    </UpDownImgContainer>
                }
            </div>
        )
    }
}

export default SlideShow;