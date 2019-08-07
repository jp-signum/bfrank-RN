import React, { Component } from 'react'
import styled from 'styled-components'

import { withContext } from '../../AppContext'
import { strongPasswordRegex, validEmailRegex } from '../../Shared/Regex'
import { validateForm } from '../../Shared/HelperFunctions'

const LoginContainer = styled.div`
 

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

const Recovery = styled.div`
   
`

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            errorMessage: '',
            formError: '',
            errors: {
                phoneNumber: '',
                emailAddress: '',
                dob: '',
            }
        }
    }

    handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target

        let errors = this.state.errors;

        switch (name) {
            case 'emailAddress':
                errors.emailAddress =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    strongPasswordRegex.test(value)
                        ? ''
                        : 'Password is not valid!';
                break;
            default:
        }

        this.setState({
            errors,
            [name]: value,
            formError: ''
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

        if (validateForm(this.state.errors)) {
            this.props.login(this.state)
                .then(() => this.props.history.push('/account/:id'))
                .catch(err => {
                    this.setState({ errorMessage: err.message })
                })
        } else {
            this.setState({
                formError: 'The application contains formatting errors please check that your email and password match the required criteria before re-submitting.'
            })
        }
    }

    render() {
        return (
            <LoginContainer>
                <StyledLoginForm onSubmit={this.handleSubmit}>
                    <LoginPasswordInput
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='firstName'
                        type='text'
                        placeholder='First Name' />
                    <div>?</div>
                    <LoginPasswordInput
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='lastName'
                        type='text'
                        placeholder='Last Name' />
                    <LoginUsernameInput
                        onChange={this.handleChange}
                        value={this.state.username}
                        name='email'
                        type='text'
                        autocomplete='username'
                        placeholder='Email' />
                    <LoginPasswordInput
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password'
                        type='password'
                        autocomplete='new-password'
                        placeholder='Password' />
                    <LoginButton type='submit'>Submit</LoginButton>
                    <Recovery>Forgot your password?</Recovery>
                    {this.state.errorMessage &&
                        <LoginErrorDiv>{this.state.errorMessage}</LoginErrorDiv>
                    }
                </StyledLoginForm>
            </LoginContainer>
        )
    }
}

export default withContext(LoginForm);