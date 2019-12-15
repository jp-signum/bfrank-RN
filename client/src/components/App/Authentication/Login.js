import React, { Component } from 'react'
import styled from 'styled-components'

import { withContext } from '../../AppContext'
import { validateForm } from '../../Shared/HelperFunctions'
import { validEmailRegex } from '../../Shared/Regex'

import media from '../../../theme/Device'

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
`

const EmailInput = styled.input`
    background: #0D0D0D;
    color: #fdfdfd;
    width: 100%;
    border-bottom: solid 2px rgb(253,  253,  253, 0.5);
    padding: 0px 0px 4px 0px;
    margin: 20px 0px 20px 0px; 

    :focus {
        outline:  none !important;
        outline-color: none !important;
        outline-style: none !important;
        outline-width: none !important;
        -webkit-focus-ring-color: none !important;
        border-bottom: solid 2px rgb(253,  253,  253, 1); 
    }

    ${media.phoneM`
        font-size: 1em;
    `}
`

const PasswordInput = styled(EmailInput)`
    margin: 8px 0px 20px 0px; 
`

const LoginBtn = styled.button`
    cursor: pointer;
    background: #fdfdfd;
    color: #060606;
    border: solid 2px #fdfdfd;
    border-radius: 4px;
    font-size: 1.1em;
    padding: 2px 0px 2px 0px;
   
   :hover {
        background: #060606;
        color: #fdfdfd;
   }

   ${media.phoneM`
        font-size: 1.2em;
        margin: 10px 0px 8px 0px;
    `}
`

const LoginErrorDiv = styled.div`
    color: #BF455B;
`

const Recovery = styled.div`
    font-size: 0.8em;
    padding: 5px 0px 0px 0px;

     ${media.phoneM`
        font-size: 1em;
    `}
`

const CenterDiv = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
`

const RecSpan = styled.div`
    cursor: pointer;
    color: rgb(253,  253,  253, 0.5);

    :hover {
        color: rgb(253,  253,  253, 0.5);
    }
`

const ErrorMessageDiv = styled.div`
    color: rgb(214, 60, 79, 0.85);
    font-size: 0.8em;
    padding-bottom: 10px;
    margin-top: -10px;

     ${media.phoneM`
        font-size: 1em;
    `}
`

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            buttonText: 'Login',
            formError: '',
            errors: {
                username: '',
            }
        }
    }

    handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target
        let errors = this.state.errors;

        switch (name) {
            case 'username':
                errors.username =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
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
            errorMessage: '',
            formError: '',
            errors: {
                username: ''
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            buttonText: '...sending'
        })

        if (validateForm(this.state.errors)) {
            this.props.login(this.state)
                .then(() => this.props.history.push('/account/:id'))
                .catch(err => {
                    this.setState({ errorMessage: err.message })
                })
        } else {
            this.setState({
                formError: 'The form contains formatting errors please check that your email and password match the required criteria before re-submitting (foo@example.com).',
                buttonText: 'Login'
            })
        }
    }

    render() {
        return (
            <div>
                <StyledLoginForm onSubmit={this.handleSubmit}>
                    <EmailInput
                        onChange={this.handleChange}
                        value={this.state.username}
                        name='username'
                        type='text'
                        autocomplete='username'
                        placeholder='Email' />
                    <ErrorMessageDiv>{this.state.errors.username}</ErrorMessageDiv>
                    <PasswordInput
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password'
                        type='password'
                        autocomplete='current-password'
                        placeholder='Password' />
                    <LoginBtn type='submit'>{this.state.buttonText}</LoginBtn>
                    {this.state.errorMessage &&
                        <LoginErrorDiv>{this.state.errorMessage}</LoginErrorDiv>
                    }
                </StyledLoginForm>
                <CenterDiv>
                    <Recovery><RecSpan onClick={() => this.props.switch()}>Forgot your password?</RecSpan></Recovery>
                </CenterDiv>
            </div>
        )
    }
}

export default withContext(LoginForm);