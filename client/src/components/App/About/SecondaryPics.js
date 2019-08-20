import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import PicutrePlaceholder2 from '../../../assets/images/jail_opt.jpg'
import PicutrePlaceholder4 from '../../../assets/images/witch_opt.jpg'

import media from '../../../theme/Device'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const MainPicDiv = styled.div`
    width: 40vw;
    padding: 10px 0px 20px 0px;
`

const MainPic = styled.img`
    width: 100%;
`

const SecondaryPicDiv = styled.div`
      width: 95vw;
      padding: 10px 0px 10px 0px;
`

const SecondaryPic = styled.img`
    width: 100%;
`

function SecondaryPics() {
    return (
        <Container>
            <MainPicDiv>
                <MainPic src={PicutrePlaceholder4} />
            </MainPicDiv>
            <SecondaryPicDiv>
                <SecondaryPic src={PicutrePlaceholder2} />
            </SecondaryPicDiv>
        </Container>
    )
}

export default SecondaryPics;