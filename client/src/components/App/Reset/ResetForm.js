import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { validateForm } from '../../Shared/HelperFunctions'
import { strongPasswordRegex, validEmailRegex } from '../../Shared/Regex'

import Login from '../Authentication/Login'

const Container = styled.div`
 
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const EmailInput = styled.input`
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
`

const PasswordInput = styled(EmailInput)`
    margin: 8px 0px 20px 0px; 
`

const SubmitBtn = styled.button`
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
`

const ErrorDiv = styled.div`
    color: #BF455B;
    padding-bottom: 20px;
`

const SucessDiv = styled(ErrorDiv)`
    color: #7fe060;
`

const ErrorMessageDiv = styled.div`
    color: rgb(214, 60, 79, 0.85);
    font-size: 0.8em;
    padding-top: 6px;
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
                        : 'PW must be at least 8 charecters in length and contain 1 number, capital letter, & sybol';
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
                        sucessMessage: 'Password scuessfully reset, please log in.',
                        buttonText: 'Reset',
                        reset: true,
                    })
                })
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
            <Container>
                {this.state.reset
                    ? <div>test</div>
                    : <Form onSubmit={this.handleSubmit}>
                        <EmailInput
                            onChange={this.handleChange}
                            value={this.state.username}
                            name='username'
                            type='text'
                            autocomplete='username'
                            placeholder='Email' />
                        <ErrorMessageDiv>{this.state.errors.emailAddress}</ErrorMessageDiv>
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
                        <p><Link to='/authentication' /></p>
                    </SucessDiv>
                }
            </Container>
        )
    }
}

export default ResetForm;