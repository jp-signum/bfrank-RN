import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

import PicutrePlaceholder2 from '../../../assets/images/jail_opt.jpg'
import PicutrePlaceholder4 from '../../../assets/images/witch_opt.jpg'

import media from '../../../theme/Device'

const Container = styled.div`
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
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
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
    width: 40vw;
    padding: 10px 0px 20px 0px;

    ${media.laptop`
        width: 26vw;
        transform: rotate(-3deg);
    `}

     ${media.laptopL`
        width: 22vw;
    `}
`

const MainPic = styled.img`
    width: 100%;
    opacity: 0.9;
    border-radius: 4px;
`

const SecondaryPicDiv = styled.div`
    transition:all ease 0.5s;
        -o-transition: all ease 0.5s;
      width: 95vw;
      padding: 10px 0px 10px 0px;

    ${media.tablet`
        width: 74vw;
        margin: 40px 0px 40px 0px;
    `}

    ${media.laptop`
        width: 42vw;
        transform: rotate(3deg);
        margin: 80px 0px 60px 0px;
    `}

    ${media.laptopL`
        width: 38vw;
    `}
`

const SecondaryPic = styled.img`
    width: 100%;
    opacity: 0.9;
    border-radius: 4px;
`

function SecondaryPics() {
    return (
        <Container>
            <Fade left duration={3000}>
                <MainPicDiv>
                    <MainPic src={PicutrePlaceholder4} />
                </MainPicDiv>
            </Fade>
            <Fade up duration={3000}>
                <SecondaryPicDiv>
                    <SecondaryPic src={PicutrePlaceholder2} />
                </SecondaryPicDiv>
            </Fade>
        </Container>
    )
}

export default SecondaryPics;