import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { SocialHrefs } from '../../Shared/ParagraphStrings'

import NavMenu from './Menu'
import media from '../../../theme/Device'

import MainLogoWhite from '../../../assets/icons/main_logo_white.svg'
import MainLogoRed from '../../../assets/icons/main_logo_red.svg'

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
    padding: 20px 0px 0px 60px;
`

const LaptopMenuRight = styled.div`
    padding: 20px 60px 0px 0px;
`

const ImgDiv = styled.div`
    position: relative;
    bottom: 18px;
`

const NavLogo = styled.img`
    width: 64px;
`

const Name = styled.div`
    position: relative;
    display: inline-block;
    right: 35px;
    color: #fdfdfd ;
    font-weight: 400;
    font-size: 1.2em;
    letter-spacing: .016em;
    padding-left: 40px;
`

const NameRight = styled.div`
    cursor: pointer;
    color: #fdfdfd;
    display: inline-block;
    font-size: 1.2em;
    letter-spacing: .016em;
    font-weight: 400;
    padding-left: 40px;

    :hover{
        color: rgb(253,  253,  253, 0.45)
    }
`

const MobileName = styled.div`
    cursor: pointer;
    position: absolute;
    right: 26px;
    top: 20px;
    color: #fdfdfd ;
    font-size: 1.2em;
    letter-spacing: .05em;

    :hover{
        color: rgb(253,  253,  253, 0.45)
    }

    ${media.phoneM`
        font-size: 1.3em;
        top: 18px;
        right: 28px;
    `}
`

const CartCount = styled.sup`
    color: rgb(214, 60, 79, 0.8) !important;
    position: relative;
    bottom: 8px;
    right: 1px;
    font-size: 0.7em;
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
                                <Link className={this.state.isStore ? this.props.storeYes : this.props.storeNo} to='/store/productlist'>
                                    <span>Shop</span>
                                </Link>
                            </Name>
                            <Name>
                                <Link className={this.state.isAbout ? this.props.aboutYes : this.props.aboutNo} to='/about'>
                                    <span>About</span>
                                </Link>
                            </Name>
                        </LaptopMenu>
                        <ImgDiv>
                            <Link to='/'>
                                <NavLogo src={MainLogoWhite} alt={SocialHrefs.mLogoAlt1}
                                    onMouseOver={e => (e.currentTarget.src = MainLogoRed)}
                                    onMouseOut={e => (e.currentTarget.src = MainLogoWhite)} />
                            </Link>
                        </ImgDiv>
                        <LaptopMenuRight>
                            <NameRight>
                                <Link className={this.state.isAccount ? this.props.accountYes : this.props.accountNo} to='/account/:id'>
                                    <span>Account</span>
                                </Link>
                            </NameRight>
                            <NameRight>
                                <CartCount>
                                    {this.props.cartCount >= 1 &&
                                        <span>({this.props.cartCount})</span>
                                    }
                                </CartCount><span>Cart</span>
                            </NameRight>
                        </LaptopMenuRight>
                    </RelativeContainerLap>
                    : <RelativeContainer>
                        <NavMenu burgerBarClassName={this.props.burgerBarClassName} />
                        <MobileName>
                            <CartCount>
                                {this.props.cartCount >= 1 &&
                                    <span>({this.props.cartCount})</span>
                                }
                            </CartCount><span>Cart</span>
                        </MobileName>
                    </RelativeContainer>
                }
            </div>
        )
    }
}

export default NavigationMobile;