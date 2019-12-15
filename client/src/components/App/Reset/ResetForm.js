import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { validateForm } from '../../Shared/HelperFunctions'
import { strongPasswordRegex, validEmailRegex } from '../../Shared/Regex'

import media from '../../../theme/Device'

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const EmailInput = styled.input`
    background: #0D0D0D ;
    color: #fdfdfd;
    border-bottom: solid 2px rgb(253,  253,  253, 0.5);
    width: 100%;
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
`

const PasswordInput = styled(EmailInput)`
    margin: 8px 0px 20px 0px; 
`

const SubmitBtn = styled.button`
    cursor: pointer;
    background: #fdfdfd;
    color: #060606;
    border-radius: 4px;
    border: solid 2px #fdfdfd;
    font-size: 1.1em;
    padding: 2px 0px 2px 0px;
   
    :hover {
        background: #060606;
        color: #fdfdfd;
    }
`

const ErrorDiv = styled.div`
    color: #BF455B;
    padding-bottom: 20px;
`

const SucessDiv = styled(ErrorDiv)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #7fe060;
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

const HiddenDiv = styled.div`
   display: hidden;
`

const StyledSpan = styled.span`
   cursor: pointer;
   color: #fdfdfd;

   :hover{
       text-decoration: underline;
   }
`

class ResetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            sucessMessage: '',
            formError: '',
            buttonText: 'Reset',
            reset: false,
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
            sucessMessage: '',
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
            axios.post('/auth/reset', this.state)
                .then((res) => {
                    console.log(res)
                    this.clearInputs()
                    this.setState({
                        sucessMessage: 'Password scuessfully reset, please log in below.',
                        buttonText: 'Reset',
                        reset: true,
                    })
                    this.props.resetText()
                    localStorage.removeItem('token');
                })
                .catch(err => {
                    this.setState({ errorMessage: err.message })
                })
        } else {
            this.setState({
                formError: 'The form contains formatting errors please check that your email and password match the required criteria before re-submitting (foo@example.com).'
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.reset
                    ? <HiddenDiv></HiddenDiv>
                    : <Form onSubmit={this.handleSubmit}>
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
                        <ErrorMessageDiv>{this.state.errors.password}</ErrorMessageDiv>
                        <SubmitBtn type='submit'>{this.state.buttonText}</SubmitBtn>
                        {this.state.errorMessage &&
                            <ErrorDiv>{this.state.formError}</ErrorDiv>
                        }
                        {this.state.errorMessage &&
                            <ErrorDiv>{this.state.errorMessage}</ErrorDiv>
                        }
                    </Form>
                }
                {this.state.sucessMessage &&
                    <SucessDiv>
                        <p>{this.state.sucessMessage}</p>
                        <Link to='/authentication' style={{ textDecoration: 'none' }}>
                            <StyledSpan>Login</StyledSpan>
                        </Link>
                    </SucessDiv>
                }
            </div>
        )
    }
}

export default ResetForm;