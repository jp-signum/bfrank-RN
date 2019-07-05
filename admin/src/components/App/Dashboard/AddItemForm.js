import React, { Component } from 'react'
import styled from 'styled-components'
import { withContext } from '../../../AppContext'

const Container = styled.div`
    background: rgb(0, 0, 0, 0.4);
    margin: 14px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    margin: 20% 0% 0% 30%;
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
    margin: 8px 0px 4px 20px;

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

const FileInput = styled.input`
    display: none;
`

const AddInput = styled.input`
  background: none;
    border-bottom: 2px solid rgb(242, 242, 242, 0.6);
    color: #F2F2F2;
    width: 60%;
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

const AddBtn = styled.button`
    cursor: pointer;
    color: #F2F2F2;
    border: 2px solid #F2F2F2;
    background: rgb(13, 13, 13, 0.9);
    border-radius: 4px;
    box-shadow: 0px 3px 15px rgba(242, 242, 242, 0.11);
    height: 35px;
    width: 110px;
    font-size: 1.2em;
    margin: 20px 0px 0px 20px;
    padding: 2px 0px 4px 0px;

    :hover{
        background: #F2F2F2;
        color: #0D0D0D;
        box-shadow: 0px 3px 15px rgba(242, 242, 242, 0);
    }
`
const HiddenDiv = styled.div`
  display: none;
`
const SuccessDiv = styled.div`
  padding-top: 20px;
  color: #7fe060;
`

const FileListItem = styled.div`
    color: #7fe060;
    padding-top: 20px;
`

class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Add Item',
            name: '',
            description: '',
            price: '',
            quantity: '',
            added: false,
            images: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            buttonText: '...sending',
            added: false
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

        this.props.addItem(data)
            .then((res) => {
                this.clearInputs()
                this.setState({
                    added: true
                })
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
            buttonText: 'Add Item',
            images: false
        })
    }

    render() {
        return (
            <Container>
                <Form
                    encType='multipart/form-data'
                    onSubmit={this.handleSubmit}>
                    <AddInput
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='Name'
                        onChange={this.handleChange} />
                    <AddInput
                        placeholder='Description'
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange} />
                    <AddInput
                        type='text'
                        placeholder='Price'
                        name='price'
                        maxLength={2}
                        value={this.state.price}
                        onChange={this.handleChange} />
                    <AddInput
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
                    <AddBtn>{this.state.buttonText}</AddBtn>
                    {this.state.images
                        ? <FileListItem>Images Uploaded!</FileListItem>
                        : <HiddenDiv></HiddenDiv> 
                    }
                    {this.state.added
                        ? <SuccessDiv>Item Sucessfully Added!</SuccessDiv>
                        : <HiddenDiv></HiddenDiv>
                    }
                </Form>
            </Container>
        )
    }

}

export default withContext(AddItemForm);