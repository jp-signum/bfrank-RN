import React, { Component } from 'react'
import styled from 'styled-components'
import { withContext } from '../../../AppContext'

const LoginContainer = styled.div`
    background: #F2F2F2;
    color: #0D0D0D;
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
    padding-bottom: 20px;
`

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`

const LoginUsernameInput = styled.input`
    margin-bottom: 16px;
    width: 100%;
    background: #F2F2F2;
    border-bottom: solid 2px rgb(13, 13, 13, 1.0);
`

const LoginPasswordInput = styled.input`
    width: 100%;
    margin-bottom: 20px;
    background: #F2F2F2;
    border-bottom: solid 2px rgb(13, 13, 13, 1.0);
`

const LoginButton = styled.button`
   background: #F2F2F2;
   color: rgb(13, 13, 13, 0.4);
   cursor: pointer;
    border-radius: 4px;
    border: solid 2px rgb(13, 13, 13, 0.4);
    font-size: 1.4em;
    padding: 4px 0px 4px 0px;
   
   :hover {
        border: solid 2px rgb(13, 13, 13, 1.0);
        color: rgb(13, 13, 13, 1.0);
   }
`

const LoginErrorDiv = styled.div`
    color: #BF455B;
`

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
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
        this.props.login(this.state)
            .then(() => this.props.history.push('/dashboard'))
            .catch(err => {
                this.setState({ errorMessage: err.message })
            })
    }

    stopEvent = (e) => {
        e.stopPropagation();
        console.log('event stopped')
    }

    render() {
        return (
            <LoginContainer>
                <StyledLoginForm onSubmit={this.handleSubmit}>
                    <LoginHeader>Admin</LoginHeader>
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
                    <LoginButton type='submit' onClick={this.stopEvent}>Login</LoginButton>
                    {this.state.errorMessage &&
                        <LoginErrorDiv>{this.state.errorMessage}</LoginErrorDiv>
                    }
                </StyledLoginForm>
            </LoginContainer>
        )
    }
}

export default withContext(LoginForm);