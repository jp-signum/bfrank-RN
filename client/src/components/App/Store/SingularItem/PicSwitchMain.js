import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    height: 100%;
`

function PicSwitch(props) {
    if (props.mainPic === 1) {
        return (
            <Img src={props.mainPicUrl} alt='first product picture' />
        )
    } else if (props.mainPic === 2) {
        return (
            <Img src={props.secondPicUrl} alt='second product picture' />
        )
    } else if (props.mainPic === 3) {
        return (
            <Img src={props.thirdPicUrl} alt='third product picture' />
        )
    } else if (props.mainPic === 4) {
        return (
            <Img src={props.fourthPicUrl} alt='fourth product picture' />
        )
    } else if (props.mainPic === 5) {
        return (
            <Img src={props.fithPicUrl} alt='fourth product picture' />
        )
    }
}

export default PicSwitch;