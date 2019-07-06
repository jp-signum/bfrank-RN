import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PositionDiv = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`

const SocialDiv = styled.div`
  position: fixed;
  bottom: 12px;
    right: 12px;
    color: rgba(252, 252, 252, 0.3);
    font-size: 0.6em;
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
                    <SocialDiv>
                        Test
                    </SocialDiv>
                </PositionDiv>
            </Menu>
        )
    }
}

export default NavMenu;