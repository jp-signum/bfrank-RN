import React, { Component } from 'react'
import styled from 'styled-components'

import OtherItem from './OtherItem'
import media from '../../../../theme/Device'

const Container = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    position: relative;
    width: 100%;
    height: 100%;

    ${media.laptop`
        margin-top: -50px;
    `}
`

const Title = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    position: relative;
    font-size: 1.4em;
    font-weight: bold;
    padding: 3% 0% 3% 3.5%;

    ${media.tablet`
        font-size: 1.8em;
        padding: 0px 0px 0px 24px;
    `}

    ${media.laptop`
        bottom: 12px;
        font-size: 2em;
        float: right;
        padding-right: 10%;
    `}
`

const List = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    display: grid;
    grid-template-columns: auto auto;

    ${media.tablet`
        grid-template-columns: 28.5vw 28.5vw 28.5vw;
        grid-gap: 20px;
        padding: 4%;
    `}

    ${media.laptop`
        grid-template-columns: 26vw 26vw 26vw;
        padding: 100px 0px 40px 0px;
        margin-left: 110px;
    `}

    ${media.laptopL`
        margin-left: 140px;
    `}

    ${media.laptopLM`
        grid-template-columns: 23vw 23vw 23vw;
        margin-left: 180px;
    `}
`

class OtherList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrolledPast: false,
            classNameBefore: 'otherShopAnimate',
            classNameAfter: 'otherShopAnimateStop'
        }
    }

    handleScrollBy = (x) => {
        this.setState({
            scrolledPast: x
        })
    }

    onScroll = () => {
        if ((window.pageYOffset || document.documentElement.scrollTop) > 200) {
            this.handleScrollBy(true)
        } else {
            this.handleScrollBy(false)
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    render() {
        const RawOtherItems = this.props.notIncluded

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
                <Title className={this.state.scrolledPast ? this.state.classNameAfter : this.state.classNameBefore}>Shop Other Nails</Title>
                <List>
                    {OtherItems}
                </List>
            </Container>
        )
    }
}

export default OtherList;