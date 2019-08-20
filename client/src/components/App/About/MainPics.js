import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import PicutrePlaceholder1 from '../../../assets/images/holeyChains_opt.jpg'
import PicutrePlaceholder3 from '../../../assets/images/speedway_opt.jpg'

import media from '../../../theme/Device'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const MainPicDiv = styled.div`
    width: 95vw;
    margin: 20px 0px 0px 0px;
    /* box-shadow: 0px 3px 15px rgba(255, 255, 255, 0.09); */

    ${media.tablet`
        margin: 100px 0px 40px 0px;
        width: 74vw;
    `}
`

const MainPic = styled.img`
    width: 100%;
`

const SecondaryPicDiv = styled.div`
    width: 40vw;
    padding: 20px 0px 20px 0px;
`

const SecondaryPic = styled.img`
    width: 100%;
`

function MainPics() {
    return (
        <Container>
            <MainPicDiv>
                <MainPic src={PicutrePlaceholder1} />
            </MainPicDiv>
            <SecondaryPicDiv>
                <SecondaryPic src={PicutrePlaceholder3} />
            </SecondaryPicDiv>
        </Container>
    )
}

export default MainPics;