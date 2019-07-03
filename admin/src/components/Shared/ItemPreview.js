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

const Name = styled.div`
    padding-left: 10px;
    color: #F2F2F2;
    display: inline-block;
    font-size: 1.1em;
`

const Edit = styled.div`
    display: inline-block;
    color: rgb(242, 242, 242, 0.4);
    cursor: pointer;
    left: 30%;
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

const Price = styled.div`
    padding: 10px 0px 0px 10px;
    color: #F2F2F2;
    font-size: 0.9em;
    display: inline-block;
`

const Quantity = styled.div`
    color: #F2F2F2;
    display: inline-block;
    font-size: 0.9em;
    left: 40%;
    position: relative;
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
    color: #fffdfd;
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
    grid-template-columns: auto auto auto;
`

const CurrentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const LabelContainer = styled(CurrentContainer)`

`

const EditContainer = styled(CurrentContainer)`
 
`

const DeleteModal = styled.div`
  position: fixed;
  top: 20%;
  right: 20%;
  bottom: 20%;
  left: 20%;
  z-index: 10;
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
                            <div>Current Item Details</div>
                            <div>{itemName}</div>
                            <div>{itemDescription}</div>
                            <div>{itemPrice}</div>
                            <div>
                                {itemQuantity != null &&
                                    <div><span>Quantity: </span>{itemQuantity}</div>
                                }
                            </div>
                        </CurrentContainer>
                        <LabelContainer>
                            <div>Name</div>
                            <div>Description</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Pics</div>
                        </LabelContainer>
                        <EditContainer><div>Edit</div></EditContainer>
                    </ModalContainer>
                    <DeleteItemBtn onClick={this.deleteItem}>
                        <span>Delete Item</span>
                    </DeleteItemBtn>
                    <ModalCloseBtn onClick={this.closeModal}>
                        <span className="bm-cross2"></span>
                        <span className="bm-cross3"></span>
                    </ModalCloseBtn>
                    {this.state.showDeleteModal
                        ? <HiddenDiv></HiddenDiv>
                        : <DeleteModal>
                            <div>Are you sure you want to delete this item??</div>Are you sure you want to delete this item??
                            <div>yes</div>
                            <div>no take me back</div>
                        </DeleteModal>
                    }
                </Modal>
            </Container>
        )
    }
}

export default Products;