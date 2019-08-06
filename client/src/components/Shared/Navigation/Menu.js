import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import OutboundLink from '../OutboundLink'
import media from '../../../theme/Device'
import NewsletterModal from '../NewsletterModal'

const PositionDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    right: 0;
    left: 0;
`

const SocialContainer = styled.div`
    position: absolute;
    bottom: 10%;
    left: 20.5%;
    letter-spacing: .05em;
    font-size: 1.2em;
    z-index: 2000;
    outline:  none !important;
    outline-color: none !important;
    outline-style: none !important;
    outline-width: none !important;
    -webkit-focus-ring-color: none !important;

    ${media.phoneM`
        left: 32%;
    `}

    ${media.tablet`
        left: 89%;
    `}
`

const SociallinkDiv = styled.div`
    display: inline;
    padding-right: 6px;
    z-index: 2000;
    font-size: 0.8em;
`
const SociallinkDivD = styled(SociallinkDiv)`
   font-size: .6em;
   position: relative;
   bottom: 2px;
   color: rgb(214, 60, 79, 0.8);
`

class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
        this.newsModal = React.createRef()
    }

    handleStateChange = (state) => {
        this.setState({ 
            menuOpen: state.isOpen 
        })
    }

    closeMenu = () => {
        this.setState({ 
            menuOpen: false 
        })
    }

    handleOpenModal = () => {
        this.newsModal.current.openModal()
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

    render() {
        return (
            <Menu
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                burgerBarClassName={this.props.burgerBarClassName}>
                <Link onClick={this.closeMenu} to='/' className='menu-item'>Home</Link>
                <Link onClick={this.closeMenu} to='/store/productlist' className='menu-item'>Store</Link>
                <Link onClick={this.closeMenu} to='/about' className='menu-item'>About</Link>
                <Link onClick={this.closeMenu} to='/about' className='menu-item'>About</Link>
                <div onClick={this.handleOpenModal} className='menu-item'>Newsletter</div>
                <PositionDiv>
                    <SocialContainer>
                        <SociallinkDiv>
                            <OutboundLink spanText='Instagram'
                                eventLabel='toInstagram'
                                to='//www.instagram.com/rave_nailz/' />
                        </SociallinkDiv>
                        <SociallinkDivD>&#x2662;</SociallinkDivD>
                        <SociallinkDiv>
                            <OutboundLink spanText='Facebook'
                                eventLabel='toFacebook'
                                to='//www.facebook.com/RaveNailz/' />
                        </SociallinkDiv>
                    </SocialContainer>
                </PositionDiv>
                <NewsletterModal ref={this.newsModal}/>
            </Menu>
        )
    }
}

export default NavMenu;