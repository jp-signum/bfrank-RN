import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { withContext } from '../../../AppContext'

const Container = styled.div`
    background: rgb(0, 0, 0, 0.4);
    margin: 14px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 66.2vh;
    overflow-y: scroll;
`

const FileInput = styled.input`

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
            images: [],
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            buttonText: '...sending'
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

    clearInputs = () => {
        this.setState({
            name: '',
            description: '',
            price: '',
            quantity: '',
            images: []
        })
    }

    render() {
        return (
            <Container>
                <Form
                    encType='multipart/form-data'
                    onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='&nbsp;'
                        onChange={this.handleChange}></input>
                    <input
                        placeholder='&nbsp;'
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}></input>
                    <input
                        type='text'
                        placeholder='&nbsp;'
                        name='price'
                        maxLength={2}
                        value={this.state.price}
                        onChange={this.handleChange}></input>
                    <input
                        placeholder='&nbsp;'
                        type='text'
                        name='quantity'
                        value={this.state.quantity}
                        onChange={this.handleChange}></input>
                    <FileInput
                        name='file'
                        multiple
                        type='file'
                        ref={(ref) => { this.uploadInput = ref; }}
                        onChange={this.handleChangeFile} />
                    <button>{this.state.buttonText}</button>
                </Form>
            </Container>
        )
    }

}

export default withContext(AddItemForm);