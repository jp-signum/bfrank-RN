import React, { Component } from 'react'
import styled from 'styled-components'
import Currency from 'react-currency-formatter'
import Modal from 'react-modal'

import { customModalStyles } from './StyleConstants'
import { withContext } from '../../AppContext'

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
    color: #F2F2F2;
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
    color: #F2F2F2;
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
    padding-bottom: 30px;
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

  :hover {
      text-decoration: underline;
  }
`

const TwoFactorDiv = styled.div`
  font-size: 1.4em;
`

const HiddenDiv = styled.div`
  display: none;
`

const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
`

const FileInput = styled.input`
  display: none;
`

const EditInput = styled.input`
  background: none;
    border-bottom: 2px solid rgb(242, 242, 242, 0.6);
    color: #F2F2F2;
    width: 94%;
    font-size: 0.9em;
    padding: 18px 0px 2px 0px;
    margin-bottom: 18px;

    :focus{
        border-bottom: 2px solid rgb(242, 242, 242, 0.9);
        outline:  none !important;
        outline-color: none !important;
        outline-style: none !important;
        outline-width: none !important;
        -webkit-focus-ring-color: none !important;
    } 
`

const AddLabelFile = styled.div`
    cursor: pointer;
    color: #F2F2F2;
    border: 2px solid #F2F2F2;
    border-radius: 4px;
    width: 98px;
    height: 20px;
    font-size: 1em;
    box-shadow: 0px 3px 15px rgba(242, 242, 242, 0.11);
    padding: 4px 0px 2px 8px;
    margin: 8px 0px 4px 14px;

    :focus{
        border-bottom: 2px solid rgb(242, 242, 242, 0.9);
        outline:  none !important;
        outline-color: none !important;
        outline-style: none !important;
        outline-width: none !important;
        -webkit-focus-ring-color: none !important;
    } 

    :hover{
        background: #F2F2F2;
        color: #0D0D0D;
        box-shadow: 0px 3px 15px rgba(242, 242, 242, 0);
    }
`

const EditBtn = styled.button`
    cursor: pointer;
    color: #F2F2F2;
    border: 2px solid #F2F2F2;
    background: rgb(13, 13, 13, 0.9);
    border-radius: 4px;
    box-shadow: 0px 3px 15px rgba(242, 242, 242, 0.11);
    height: 35px;
    width: 110px;
    font-size: 1.2em;
    margin: 20px 0px 0px 14px;
    padding: 2px 0px 4px 0px;

    :hover{
        background: #F2F2F2;
        color: #0D0D0D;
        box-shadow: 0px 3px 15px rgba(242, 242, 242, 0);
    }
`

const SuccessDiv = styled.div`
  padding-top: 20px;
  color: #7fe060;
`

const FileListItem = styled.div`
    color: #7fe060;
    padding-top: 20px;
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
            id: '',
            images: false,
            edited: false
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            buttonText: '...sending',
            edited: false
        })

        let data = new FormData();
        data.append('file1', this.uploadInput.files[0]);
        data.append('file2', this.uploadInput.files[1]);
        data.append('file3', this.uploadInput.files[2]);
        data.append('file4', this.uploadInput.files[3]);
        data.append('file5', this.uploadInput.files[4]);
        data.append('name', this.state.name);
        data.append('description', this.state.description);
        data.append('price', this.state.price);
        data.append('quantity', this.state.quantity);

        this.props.editItem(this.props.nail._id, data)
            .then((res) => {
                this.clearInputs();
                this.setState({
                    edited: true
                });
            })
            .catch(err => console.error(err.response.data.message))
    }


    handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleImgUpload = () => {
        this.setState({
            images: true
        })
    }

    clearInputs = () => {
        this.setState({
            name: '',
            description: '',
            price: '',
            quantity: '',
            id: '',
            buttonText: 'Edit Item',
            images: false
        })
    }

    componentDidMount() {
        this.setState({
            id: this.props.nail._id
        })
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
                            <EditForm
                                encType='multipart/form-data'
                                onSubmit={this.handleSubmit}>
                                <EditInput
                                    type='text'
                                    name='name'
                                    value={this.state.name}
                                    placeholder='Name'
                                    onChange={this.handleChange} />
                                <EditInput
                                    placeholder='Description'
                                    type='text'
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.handleChange} />
                                <EditInput
                                    type='text'
                                    placeholder='Price'
                                    name='price'
                                    maxLength={2}
                                    value={this.state.price}
                                    onChange={this.handleChange} />
                                <EditInput
                                    placeholder='Quantity'
                                    type='text'
                                    name='quantity'
                                    value={this.state.quantity}
                                    onChange={this.handleChange} />
                                <label>
                                    <AddLabelFile><span>Upload Pics</span>
                                        <FileInput
                                            multiple
                                            type='file'
                                            onChange={this.handleImgUpload}
                                            ref={(ref) => { this.uploadInput = ref; }} />
                                    </AddLabelFile>
                                </label>
                                <EditBtn>{this.state.buttonText}</EditBtn>
                                {this.state.images
                                    ? <FileListItem>Images Uploaded!</FileListItem>
                                    : <HiddenDiv></HiddenDiv>
                                }
                                {this.state.edited
                                    ? <SuccessDiv>Item Sucessfully Edited!</SuccessDiv>
                                    : <HiddenDiv></HiddenDiv>
                                }
                            </EditForm>
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
                            <AnswerDiv><YesSpan onClick={() => this.props.deleteItem(itemID)}>Yes</YesSpan><NoSpan onClick={this.deleteModalHide}>No take me back to the edit page.</NoSpan></AnswerDiv>
                        </DeleteModal>
                        : <HiddenDiv></HiddenDiv>
                    }
                </Modal>
            </Container>
        )
    }
}

export default withContext(Products);