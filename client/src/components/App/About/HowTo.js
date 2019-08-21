import React from 'react'
import styled from 'styled-components'

import InstructionalVideo from '../../../assets/video/instructionalVideo1.MP4'
import Poster1 from '../../../assets/images/instruct_screenShot.png'

const InstructVid = styled.video`
    width: 100%;
`

function HowTo() {
    return (
        <InstructVid
            oncontextmenu='return false'
            id='instructVid1'
            poster={Poster1}
            controls
            muted >
            <source src={InstructionalVideo} type='video/mp4' />
        </InstructVid>
    )
}

export default HowTo;