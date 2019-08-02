import React from 'react'
import styled from 'styled-components'

import OtherItem from './OtherItem'
import media from '../../../../theme/Device'

const Container = styled.div`
    width: 100%;
    height: 100%;
    transition: all ease 0.5s;
    -o-transition: all .5s ease;
`

const Title = styled.div`
    padding: 3% 0% 3% 3.5%;
    font-size: 1.4em;
    font-weight: bold;

    ${media.tablet`
        font-size: 1.8em;
        padding: 0px 0px 0px 24px;
    `}

    ${media.laptop`
        font-size: 2em;
    `}
`

const List = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    ${media.tablet`
        display: grid;
        grid-template-columns: 28.5vw 28.5vw 28.5vw;
        grid-gap: 20px;
        padding: 4%;
    `}

    ${media.laptop`
        grid-template-columns: 26.6vw 26.6vw 26.6vw;
        grid-gap: 51px;
        padding: 5%;
        margin-left: 10px;
    `}

    ${media.laptopL`
        grid-template-columns: 20vw 20vw 20vw 20vw;
        grid-gap: 42.5px;
        margin-left: 2px;
    `}

    ${media.laptopLM`
        grid-gap: 49px;
        margin-left: 0px;
    `}
`

function OtherList(props) {
    const RawOtherItems = props.notIncluded

    const OtherItems = RawOtherItems.map(item => {
        return (
            <OtherItem
                key={item._id}
                item={item}
                id={item._id}
            />
        )
    })
    return (
        <Container>
            <Title>Shop Other Nails</Title>
            <List>
                {OtherItems}
            </List>
        </Container>
    )
}

export default OtherList;