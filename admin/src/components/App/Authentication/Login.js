import React, { Component } from 'react'
import styled from 'styled-components'
import { withContext } from '../../AppContext'

const LoginContainer = styled.div`
    background: #f7e7e7;
    color: #1a0606;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginHeader = styled.div`
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
            username: '',
            password: '',
            errorMessage: '',
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
            username: '',
            password: '',
            errorMessage: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ statusColor: 'green' }, () => {
            this.props.login(this.state)
                .then(() => this.props.history.push("/home"))
                .catch(err => {
                    this.setState({ errorMessage: err.message, statusColor: '' })
                })
        })
    }

    render() {
        console.log(this.state)
        return (
            <LoginContainer>
                <StyledLoginForm onSubmit={this.handleSubmit}>
                    <LoginHeader>Log In</LoginHeader>
                    <label htmlFor="unInp">
                        <LoginUsernameInput
                            onChange={this.handleChange}
                            value={this.state.username}
                            name='username'
                            type='text'
                            placeholder='Username' />
                    </label>
                    <label htmlFor="unInp">
                        <LoginPasswordInput
                            onChange={this.handleChange}
                            value={this.state.password}
                            name='password'
                            type='password'
                            placeholder='Password' />
                    </label>
                    <LoginButton
                        color=''
                        type='submit'>
                        Submit
                        </LoginButton>
                </StyledLoginForm>
                {this.state.errorMessage &&
                    <LoginErrorDiv>{this.state.errorMessage}</LoginErrorDiv>
                }
            </LoginContainer>
        )
    }
}

export default withContext(LoginForm);