import React from 'react'
import Fade from 'react-reveal'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: relative;
`

const Img = styled.img`
    width: 100%;
`

const AddOne = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
`

function PicSwitch(props) {
    if (props.mainPic === 1) {
        return (
            <Fade duration={2000}>
                <Container>
                    <Img src={props.mainPicUrl} alt='first product picture' />
                    <AddOne onClick={props.forward}>asdasoijdoija</AddOne>
                </Container>
            </Fade>
        )
    } else if (props.mainPic === 2) {
        return (
            <Fade duration={2000}>
                <Img src={props.secondPicUrl} alt='second product picture' />
            </Fade>
        )
    } else if (props.mainPic === 3) {
        return (
            <Fade duration={2000}>
                <Img src={props.thirdPicUrl} alt='third product picture' />
            </Fade>
        )
    } else if (props.mainPic === 4) {
        return (
            <Fade duration={2000}>
                <Img src={props.fourthPicUrl} alt='fourth product picture' />
            </Fade>
        )
    } else if (props.mainPic === 5) {
        return (
            <Fade duration={2000}>
                <Img src={props.fithPicUrl} alt='fourth product picture' />
            </Fade>
        )
    }
}

export default PicSwitch;