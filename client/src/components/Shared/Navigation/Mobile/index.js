import React, { Component } from 'react'
import { withBps } from 'react-bps'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import NavMenu from './Menu'

const LaptopMenu = styled.div`
    z-index: 10;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: ${props => props.marginTop};
`

const Name = styled.div`
    font-family: 'BwNistaGrot', sans-serif;
    text-transform: uppercase;
    letter-spacing: .016em;
    font-weight: 500;
    position: relative;
    right: 35px;
    font-size: 1.7em;
    top: -22px;
    padding-left: 32px;
    color: ${props => props.color};
`

const RelativeContainer = styled.div`
    position: relative;
    transition:all ease 0.5s;
        -o-transition: all .5s ease;
`


class NavigationMobile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLaptop: false
        }
    }

    setWindow = () => {
        if (window.innerWidth > 1000) {
            this.setState({
                isLaptop: true
            })
        }
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

    componentDidMount() {
        this.setWindow()
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        return (
            <div style={this.state.isLaptop ? this.props.navStyleLap : this.props.navStyle}>
                <RelativeContainer>
                    {this.state.isLaptop
                        ? <LaptopMenu marginTop={this.props.marginTop}>
                            <Link to='/store/productsList' style={{ textDecoration: 'none' }} >
                                <Name color={this.props.color}><span className='menuHover1'>Shop</span></Name></Link>
                            <Link to='/about' id='about' style={{ textDecoration: 'none' }} >
                                <Name color={this.props.color}><span className='menuHover2'>About</span></Name></Link>
                            <Link to='/Account' style={{ textDecoration: 'none' }} >
                                <Name color={this.props.color}><span className='menuHover3'>Account</span></Name></Link>
                            <Link to='/cart/:id' style={{ textDecoration: 'none' }} >
                                <Name color={this.props.color}><span className='menuHover4'>Cart</span></Name></Link>
                        </LaptopMenu>
                        : <NavMenu burgerBarClassName={this.props.burgerBarClassName} />
                    }
                </RelativeContainer>
            </div>
        )
    }
}

export default withBps({ mobileFirst: true, propName: 'breakpoints' })(NavigationMobile);