import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

import PicutrePlaceholder1 from '../../../assets/images/holeyChains_opt.jpg'
import PicutrePlaceholder3 from '../../../assets/images/speedway_opt.jpg'

import media from '../../../theme/Device'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${media.laptop`
        display: flex; 
        flex-direction: row;
        justify-content: space-around;
        margin: 100px 0px 40px 0px;
    `}
`

const MainPicDiv = styled.div`
    width: 95vw;
    margin: 20px 0px 0px 0px;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;
    transform: rotate(3deg);

    ${media.tablet`
        margin: 100px 0px 40px 0px;
        width: 74vw;
    `}

     ${media.laptop`
        width: 42vw;
        margin: 80px 0px 60px 0px;
    `}

     ${media.laptopL`
        width: 38vw;
    `}

`

const MainPic = styled.img`
    width: 100%;
    opacity: 0.9;
    border-radius: 4px;
`

const SecondaryPicDiv = styled.div`
    width: 40vw;
    padding: 20px 0px 20px 0px;
    transition:all ease 0.5s;
    -o-transition: all .5s ease;
    
    ${media.laptop`
        width: 26vw;
        transform: rotate(-3deg);
    `}

     ${media.laptopL`
        width: 22vw;
    `}
`

const SecondaryPic = styled.img`
    width: 100%;
    opacity: 0.9;
    border-radius: 4px;
`

function MainPics() {
    return (
        <Container>
            <Fade up duration={1000}>
                <MainPicDiv>
                    <MainPic src={PicutrePlaceholder1} />
                </MainPicDiv>
            </Fade>
            <Fade up duration={1000}>
                <SecondaryPicDiv>
                    <SecondaryPic src={PicutrePlaceholder3} />
                </SecondaryPicDiv>
            </Fade>
        </Container>
    )
}

export default MainPics;