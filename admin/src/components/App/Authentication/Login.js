import React, { Component } from 'react'
import styled from 'styled-components'
import { withContext } from "../../AppContext"

const LoginFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginHeader = styled.p`
    color: #F4FAFF;
    font-size: 2em;
    text-align: center;
`

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`


const LoginUsernameInput = styled.input`
    
`

const LoginPasswordInput = styled.input`
  
`


const LoginButton = styled.button`
  
`

const LoginErrorDiv = styled.div`
 
`

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            statusColor: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ statusColor: '' }, () => {
            this.props.login(this.state)
                .then(() => this.props.history.push("/home"))
                .catch(err => {
                    this.setState({ errorMessage: err.message, statusColor: '' })
                })
        })
    }

    render() {
        return (
            <LoginFormWrapper>
                <StyledLoginForm onSubmit={this.handleSubmit}>
                    <LoginHeader>Log In</LoginHeader>
                    <LoginUsernameInput
                        onChange={this.handleChange}
                        value={this.state.username}
                        name='username'
                        type='text'
                        placeholder='Username' />
                    <LoginPasswordInput
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password'
                        type='password'
                        placeholder='Password' />
                    <LoginButton
                        color=''
                        type='submit'>
                        Submit
                        </LoginButton>
                </StyledLoginForm>
                { this.state.errorMessage &&
                    <LoginErrorDiv>{this.state.errorMessage}</LoginErrorDiv>
                }
            </LoginFormWrapper>
        )
    }
}

export default withContext(LoginForm);