import React, { Component } from 'react'
import styled from 'styled-components'

import { withContext } from '../../AppContext'
import { strongPasswordRegex, validEmailRegex } from '../../Shared/Regex'
import { validateForm } from '../../Shared/HelperFunctions'

import media from '../../../theme/Device'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`

const UsernameInput = styled.input`
   padding: 0px 0px 4px 0px;
    margin: 20px 0px 20px 0px; 
    width: 100%;
    background: #0D0D0D ;
    color: #fdfdfd;
    border-bottom: solid 2px rgb(253,  253,  253, 0.5);

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

const PasswordInput = styled(UsernameInput)`
   margin: 8px 0px 20px 0px; 
`

const SignupBtn = styled.button`
   background: #fdfdfd;
   color: #060606;
   cursor: pointer;
    border-radius: 4px;
    border: solid 2px #fdfdfd;
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

const ErrorDiv = styled.div`
    color: #BF455B;
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
            formError: '',
            buttonText: 'Signup',
            errors: {
                username: '',
                password: ''
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
            case 'password':
                errors.password =
                    strongPasswordRegex.test(value)
                        ? ''
                        : 'Must contain at least 1 number, capital letter, & symbol';
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
                username: '',
                password: ''
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            buttonText: '...sending'
        })

        if (validateForm(this.state.errors)) {
            this.props.signup(this.state)
                .then(() => this.props.history.push('/account/:id'))
                .catch(err => {
                    this.setState({ errorMessage: err.message })
                })
        } else {
            this.setState({
                buttonText: 'Signup',
                formError: 'The form contains formatting errors please check that your email and password match the required criteria before re-submitting (foo@example.com).'
            })
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <UsernameInput
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
                        autocomplete='new-password'
                        placeholder='Password' />
                    <ErrorMessageDiv>{this.state.errors.password}</ErrorMessageDiv>
                    <SignupBtn type='submit'>{this.state.buttonText}</SignupBtn>
                    {this.state.errorMessage &&
                        <ErrorDiv>{this.state.errorMessage}</ErrorDiv>
                    }
                </Form>
            </div>
        )
    }
}

export default withContext(LoginForm);