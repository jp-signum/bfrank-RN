import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import OutboundLink from '../../OutboundLink'

const PositionDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`

const SocialContainer = styled.div`
    position: absolute;
    bottom: 4%;
    left: 24%;
    letter-spacing: .04em;
    font-size: 1.1em;
`

const SociallinkDiv = styled.div`
    display: inline;
    padding-right: 6px;
`
const SociallinkDivD = styled(SociallinkDiv)`
   position: relative;
   top: 3.5px;
   color: rgba(242, 242, 242, 0.4);
`

class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    componentDidMount() {
        if (this.state.menuOpen === false) {
            document.body.setAttribute("style", "overflow: visible; position: static;");
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.menuOpen !== this.state.menuOpen) {
            if (this.state.menuOpen) {
                document.body.setAttribute("style", "overflow: hidden; position: fixed;");
            } else {
                document.body.setAttribute("style", "overflow: visible; position: static;");
            }
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {
        return (
            <Menu
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                burgerBarClassName={this.props.burgerBarClassName}>
                <Link onClick={() => this.closeMenu()} to='/' id='home' className='menu-item'>Home</Link>
                <Link onClick={() => this.closeMenu()} to='/store/productsList' id='storeProductsList' className='menu-item'>Store</Link>
                <Link onClick={() => this.closeMenu()} to='/about' id='about' className='menu-item'>About</Link>
                <Link onClick={() => this.closeMenu()} to='/contact' id='contact' className='menu-item'>Contact</Link>


                <PositionDiv>
                    <SocialContainer>
                        <SociallinkDiv>
                            <OutboundLink spanText='Instagram'
                                eventLabel='toInstagram'
                                to='//www.instagram.com/rave_nailz/'
                                shop='false' />
                        </SociallinkDiv>
                        <SociallinkDivD>&#8226;</SociallinkDivD>
                        <SociallinkDiv>
                            <OutboundLink spanText='Facebook'
                                eventLabel='toFacebook'
                                to='//www.facebook.com/RaveNailz/'
                                shop='false' />
                        </SociallinkDiv>
                    </SocialContainer>
                </PositionDiv>
            </Menu>
        )
    }
}

export default NavMenu;