import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { validateForm } from '../../Shared/HelperFunctions'
import { validEmailRegex } from '../../Shared/Regex'

import media from '../../../theme/Device'

const ForgotForm = styled.form`
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

    ${media.phoneM`
        font-size: 1em;
    `}
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

   ${media.phoneM`
        font-size: 1.2em;
        margin: 10px 0px 8px 0px;
    `}
`

const ErrorDiv = styled.div`
    padding: 10px 0px 0px 0px;
    color: #BF455B;
`

const SucessDiv = styled(ErrorDiv)`
    color: #7fe060;
`

const Back = styled.div`
    padding: 5px 0px 0px 0px;
    font-size: 0.8em;

    ${media.phoneM`
        font-size: 1em;
    `}
`

const CenterDiv = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
`

const BackSpan = styled.div`
    color: rgb(253,  253,  253, 0.5);
    cursor: pointer;

    :hover {
        color: rgb(253,  253,  253, 0.5);
    }
`

const ErrorMessageDiv = styled.div`
    color: rgb(214, 60, 79, 0.85);
    font-size: 0.8em;
    padding-bottom: 10px;
    margin-top: -10px;
`

class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            errorMessage: '',
            formError: '',
            buttonText: 'Submit',
            sucessMessage: '',
            errors: {
                username: ''
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
            errorMessage: '',
            formError: '',
            sucessMessage: '',
            errors: {
                emailAddress: '',
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            buttonText: '...sending'
        })

        if (validateForm(this.state.errors)) {
            axios.post('/api/email/forgot', this.state)
                .then((res) => {
                    console.log(res)
                    this.clearInputs()
                    this.setState({
                        sucessMessage: 'Recovery email sent!',
                        buttonText: 'Submit'
                    })
                })
                .catch(err => {
                    this.setState({ errorMessage: err.message })
                })
        } else {
            this.setState({
                buttonText: 'Submit',
                formError: 'The form contains formatting errors please check your email address before re-submitting (foo@example.com).'
            })
        }
    }

    render() {
        return (
            <div>
                <ForgotForm onSubmit={this.handleSubmit}>
                    <EmailInput
                        onChange={this.handleChange}
                        value={this.state.username}
                        name='username'
                        type='text'
                        autocomplete='username'
                        placeholder='Email' />
                    <ErrorMessageDiv>{this.state.errors.username}</ErrorMessageDiv>
                    <SubmitBtn type='submit'>{this.state.buttonText}</SubmitBtn>
                    {this.state.errorMessage &&
                        <ErrorDiv>
                            <div>No account with this username was found</div>
                            <div>{this.state.errorMessage}</div>
                        </ErrorDiv>
                    }
                    {this.state.sucessMessage &&
                        <SucessDiv>{this.state.sucessMessage}</SucessDiv>
                    }
                </ForgotForm>
                <CenterDiv>
                    <Back><BackSpan onClick={() => this.props.back()}>Login</BackSpan></Back>
                </CenterDiv>
            </div>
        )
    }
}

export default Forgot;