import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

import media from '../../theme/Device'
import { customModalStyles } from './StyleConstants'
import MailChimp from './Mailchimp'

import MainLogoDark from '../../assets/icons/main_logo_dark.svg'

const ModalCloseBtn = styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    background: none;
    color: #fffdfd;
    height: 30px;
    width: 30px;
    font-size: 2em;

    :hover {
        color: #D63C4F;
    }
`

const CenterContainer = styled.div`
     transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MailDiv = styled.div`
    margin-top: 34%;
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    width: 260px;

    ${media.phoneM`
        width: 290px;
    `}

    ${media.phoneLL`
        width: 350px;
    `}

    ${media.tablet`
        width: 400px;
    `}

    ${media.laptop`
        margin-top: 130px;
    `}
`

const SubscribeDiv = styled.div`
    text-transform: uppercase;
    background:  rgb(0, 0, 0, 0);
    color: #fdfdfd;
    letter-spacing: 1.8px;
    border-top: #fdfdfd 2px solid;
    border-left: #fdfdfd 2px solid;
    border-right: #fdfdfd 2px solid;
    border-radius: 4px 4px 0px 0px;
    font-size: 1.3em;
    padding: 7px 0px 7px 0px;
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    text-align: center;
    

    ${media.phoneM`
        font-size: 1.4em;
        padding: 8px 0px 8px 0px;
    `}
`

const ListDescriptionDiv = styled.div`
    text-align: center;
    transition:all ease 0.5s;
    -o-transition: all 0.5s ease;
    color: #0D0D0D;
    padding: 9px 9px 9px 9px;
    
    ${media.phoneM`
        padding: 10px 10px 10px 10px;
    `}

    ${media.tablet`
        padding: 10px 40px 12px 40px;
    `}

    ${media.laptop`
        padding: 12px 40px 12px 40px;
    `}
`

const WhiteContainer = styled.div`
    background: rgb(253,  253,  253, 1);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Rsvg = styled.img`
    height: 130px;
    transition: ease 0.5s;
    padding: 8px 8px 8px 8px;

    ${media.phoneS`
        padding: 9px 9px 9px 9px;
        height: 134px;
    `}
    
    ${media.phoneM`
        padding: 10px 0px 10px 0px;
        height: 136px;
    `}
`

Modal.setAppElement(document.getElementById('root'));

class NewsletterModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        document.body.style.overflow = 'unset';
        this.setState({
            showModal: false
        })
    }

    componentDidUpdate() {
        if (this.state.showModal) {
            document.body.style.overflow = 'hidden';
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.state.showModal}
                contentLabel='Mailchimp signup modal'
                onRequestClose={this.closeModal}
                style={customModalStyles}>
                <CenterContainer>
                    <MailDiv>
                        <SubscribeDiv>join the crew</SubscribeDiv>
                        <WhiteContainer>
                            <ListDescriptionDiv>Subcribe to our email newsletter to recieve <span style={{ fontWeight: 'bold' }}>exclusive</span> product drops, discounts, giveaways, and more.</ListDescriptionDiv>
                            <Rsvg src={MainLogoDark} alt='mainLogoDark' />
                            <MailChimp />
                        </WhiteContainer>
                    </MailDiv>
                </CenterContainer>
                <ModalCloseBtn onClick={this.closeModal}>
                    <span className="bm-cross2"></span>
                    <span className="bm-cross3"></span>
                </ModalCloseBtn>
            </Modal>
        )
    }
}

export default NewsletterModal;