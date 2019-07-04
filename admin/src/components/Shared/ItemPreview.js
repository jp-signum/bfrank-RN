import React, { Component } from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter';
import Modal from 'react-modal'

import { customModalStyles } from './StyleConstants';

const Container = styled.div`
   margin: 14px;
   background: rgb(242, 242, 242, 0.1);
`

const Img = styled.img`
    height: 150px;
    width: 150px;
    float: left;
`

const ImgEdit = styled.img`
    height: 144px;
    padding: 6px;
`

const Name = styled.div`
    padding-left: 10px;
    color: #F2F2F2;
    display: inline-block;
    font-size: 1.1em;
`

const CurrentName = styled.div`
    padding-top: 10px;
    font-size: 1.1em;
`

const Edit = styled.div`
    display: inline-block;
    color: rgb(242, 242, 242, 0.4);
    cursor: pointer;
    left: 34%;
    position: relative;
    font-size: 0.9em;

    :hover{
        color: #F2F2F2;
    }
`

const Description = styled.div`
    padding: 0px 10px 0px 161px;
    color: #F2F2F2;
`

const CurrentDescription = styled.div`
    padding-top: 10px;
`

const Price = styled.div`
    padding: 10px 0px 0px 10px;
    color: #F2F2F2;
    font-size: 0.9em;
    display: inline-block;
`

const CurrentPrice = styled.div`
    padding-top: 10px;
    font-size: 0.9em;
`

const Quantity = styled.div`
    color: #F2F2F2;
    display: inline-block;
    font-size: 0.9em;
    left: 43%;
    position: relative;
`

const CurrentQuantity = styled.div`
    font-size: 0.9em;
    padding-bottom: 10px;
`

const RelativeDiv1 = styled.div`
    position: relative;
    padding: 7px 0px 8px 0px;
`

const RelativeDiv = styled.div`
    position: relative;
`

const ModalCloseBtn = styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    background: none;
    color: #fffdfd;
    height: 30px;
    width: 30px;
    font-size: 2em;
    outline: none;
    border: none;
    cursor: pointer;

    :hover > span {
      background: #BF455B;
  }
`

const DeleteItemBtn = styled.button`
    position: absolute;
    left: 30px;
    top: 30px;
    background: none;
    color: rgb(242, 242, 242, 0.8);
    height: 50px;
    width: 70px;
    font-size: 1.2em;
    outline: none;
    border: none;
    cursor: pointer;

    :hover > span {
      color: #BF455B;
  }
`

const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    background: none;
    color: #fffdfd;
    display: grid;
    grid-template-columns: 54vw 46vw;
    grid-gap: 10px;
    overflow: hidden;
    padding-left: 10px;
`

const CurrentTitle = styled.div`
   font-size: 1.2em;
   padding-bottom: 40px;
   text-decoration: underline;
`

const EditTitle = styled.div`
    font-size: 1.2em;
    padding-bottom: 100px;
    text-decoration: underline;
`

const CurrentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const EditContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const DeleteModal = styled.div`
  position: fixed;
  background: rgb(242, 242, 242);
  color: #0D0D0D;
  top: 25%;
  right: 35%;
  bottom: 35%;
  left: 25%;
  z-index: 10;
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const AnswerDiv = styled.div`
  padding-top: 40px;
`

const YesSpan = styled.span`
  color: #0D0D0D;
    cursor: pointer;

  :hover {
      color: #BF455B;
  }
`

const NoSpan = styled.span`
  padding-left: 60px;
  color: #0D0D0D ;
  font-size: 1.1em;
  cursor: pointer;
`

const TwoFactorDiv = styled.div`
  font-size: 1.4em;
`

const HiddenDiv = styled.div`
  display: none;
`


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showDeleteModal: false,
            buttonText: 'Edit Item',
            name: '',
            description: '',
            price: '',
            quantity: '',
            images: [],
        };
    }

    openModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeModal = () => {
        document.body.style.overflow = 'unset';
        this.setState({
            showModal: false,
            showDeleteModal: false,
        });

    }

    deleteModalShow = () => {
        this.setState({
            showDeleteModal: true
        });
    }

    deleteModalHide = () => {
        this.setState({
            showDeleteModal: false
        });
    }

    componentDidUpdate() {
        if (this.state.showModal) {
            document.body.style.overflow = 'hidden';
        }
    }


    render() {
        const itemPrice = (this.props.nail.price / 100),
            itemName = this.props.nail.name,
            itemDescription = this.props.nail.description,
            itemQuantity = this.props.nail.quantity,
            itemPicArr = this.props.nail.pictures,
            itemID = this.props.nail._id;

        return (
            <Container>
                <Img src={itemPicArr[0]} alt='first product picture' />
                <RelativeDiv1>
                    <Name>{itemName}</Name>
                    <Edit><span onClick={this.openModal}>Edit</span></Edit>
                </RelativeDiv1>
                <RelativeDiv>
                    <Description>{itemDescription}</Description>
                    <Price><Currency quantity={itemPrice} symbol="$" locale="en" /></Price>
                    <Quantity>
                        {itemQuantity != null &&
                            <div><span>Quantity: </span>{itemQuantity}</div>
                        }
                    </Quantity>
                </RelativeDiv>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    style={customModalStyles}>
                    <ModalContainer>
                        <CurrentContainer>
                            <CurrentTitle>Current Item Details</CurrentTitle>
                            <CurrentName><span>Name: </span> {itemName}</CurrentName>
                            <CurrentDescription><span>Description: </span>{itemDescription}</CurrentDescription>
                            <CurrentPrice><span>Price: </span><Currency quantity={itemPrice} symbol="$" locale="en" /></CurrentPrice>
                            <CurrentQuantity>
                                {itemQuantity != null &&
                                    <div><span>Quantity: </span>{itemQuantity}</div>
                                }
                            </CurrentQuantity>
                            <div>
                                <ImgEdit src={itemPicArr[0]} alt='first product picture' />
                                <ImgEdit src={itemPicArr[1]} alt='first product picture' />
                                <ImgEdit src={itemPicArr[2]} alt='first product picture' />
                                <ImgEdit src={itemPicArr[3]} alt='first product picture' />
                                <ImgEdit src={itemPicArr[4]} alt='first product picture' />
                            </div>
                        </CurrentContainer>
                        <EditContainer>
                            <EditTitle>Edit</EditTitle>
                            <form></form>
                        </EditContainer>
                    </ModalContainer>
                    <DeleteItemBtn onClick={this.deleteModalShow}>
                        <span>Delete Item</span>
                    </DeleteItemBtn>
                    <ModalCloseBtn onClick={this.closeModal}>
                        <span className="bm-cross2"></span>
                        <span className="bm-cross3"></span>
                    </ModalCloseBtn>
                    {this.state.showDeleteModal
                        ? <DeleteModal>
                            <TwoFactorDiv>Are you sure you want to delete this item??</TwoFactorDiv>
                            <AnswerDiv><YesSpan>Yes</YesSpan><NoSpan onClick={this.deleteModalHide}>No take me back to the edit page.</NoSpan></AnswerDiv>
                        </DeleteModal>
                        : <HiddenDiv></HiddenDiv>
                    }
                </Modal>
            </Container>
        )
    }
}

export default Products;