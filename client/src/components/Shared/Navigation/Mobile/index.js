import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import NavMenu from './Menu'

import MainLogoWhite from '../../../../assets/icons/main_logo_white.svg'
import MainLogoRed from '../../../../assets/icons/main_logo_red.svg'

const RelativeContainerLap = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`

const RelativeContainer = styled.div`
    position: relative;
`

const LaptopMenu = styled.div`

`

const LaptopMenuRight = styled.div`
`

const NavLogo = styled.img`
    width: 60px;
    margin-bottom: 40px;
`

const Name = styled.div`
    letter-spacing: .016em;
    font-weight: 400;
    position: relative;
    right: 35px;
    font-size: 1.2em;
    padding-left: 32px;
    color: #fdfdfd;
`

const MobileName = styled.div`
    color: #fdfdfd ;
    position: absolute;
    right: 24px;
    top: 16px;
    font-size: 1.1em;
    letter-spacing: .05em;
    cursor: pointer;

    :hover{
        color: rgb(253,  253,  253, 0.6)
    }
`

const CartCount = styled.sup`
    color: rgb(214, 60, 79, 0.8) !important;
    position: relative;
    bottom: 7px;
    right: 2px;
    font-size: 0.6em;
`

class NavigationMobile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLaptop: false,
            isStore: false,
            isAbout: false,
            isAccount: false
        }
    }

    setWindow = () => {
        if (window.innerWidth > 1000) {
            this.setState({
                isLaptop: true
            })
        }
    }

    setLocation = () => {
        if (this.props.location === 'store') {
            this.setState({
                isStore: true
            })
        } else if (this.props.location === 'about') {
            this.setState({
                isAbout: true
            })
        } else if (this.props.location === 'account') {
            this.setState({
                isAccount: true
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
        this.setLocation()
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        return (
            <div style={this.state.isLaptop ? this.props.navStyleLap : this.props.navStyle}>
                {this.state.isLaptop
                    ? <RelativeContainerLap>
                        <LaptopMenu>
                            <Name>
                                <Link to='/store/productsList'>
                                    <span className={this.state.isStore ? this.props.storeYes : this.props.storeNo}>Shop</span>
                                </Link>
                            </Name>
                            <Name>
                                <Link to='/about'>
                                    <span className={this.state.isAbout ? this.props.storeYes : this.props.storeNo}>About</span>
                                </Link>
                            </Name>
                        </LaptopMenu>
                        <Link to='/'>
                            <NavLogo
                                src={MainLogoWhite}
                                onMouseOver={e => (e.currentTarget.src = MainLogoRed)}
                                onMouseOut={e => (e.currentTarget.src = MainLogoWhite)}
                                alt='Rave Nailz main logo' />
                        </Link>
                        <LaptopMenuRight>
                        <Name>
                            <span>Account</span>
                        </Name>
                        <Name><span className='menuHover4'>Cart</span></Name>
                        </LaptopMenuRight>
                    </RelativeContainerLap>
                    : <RelativeContainer>
                    <NavMenu burgerBarClassName={this.props.burgerBarClassName} />
                    <Link to='/cart/:id' style={{ textDecoration: 'none' }} >
                        <MobileName>
                            <CartCount>
                                {this.props.cartCount >= 1 &&
                                    <span>({this.props.cartCount})</span>
                                }
                            </CartCount><span>Cart</span>
                        </MobileName>
                    </Link>
                </RelativeContainer>
                }
            </div>
        )
    }
}

export default NavigationMobile;