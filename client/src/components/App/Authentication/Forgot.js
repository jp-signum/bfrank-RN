import React, { Component } from 'react'
import styled from 'styled-components'

import { validateForm } from '../../Shared/HelperFunctions'
import { validEmailRegex } from '../../Shared/Regex'

const Container = styled.div`
 
`

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

const LoginErrorDiv = styled.div`
    color: #BF455B;
`

const Back = styled.div`
    padding: 5px 0px 0px 0px;
    font-size: 0.8em;
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

class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errorMessage: '',
            formError: '',
            errors: {
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
            email: '',
            errorMessage: '',
            formError: '',
            errors: {
                emailAddress: '',
                dob: '',
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // if (validateForm(this.state.errors)) {
        //     this.props.login(this.state)
        //         .then(() => this.props.history.push('/account/:id'))
        //         .catch(err => {
        //             this.setState({ errorMessage: err.message })
        //         })
        // } else {
        //     this.setState({
        //         formError: 'The application contains formatting errors please check that your email and password match the required criteria before re-submitting.'
        //     })
        // }
    }

    render() {
        return (
            <Container>
                <ForgotForm onSubmit={this.handleSubmit}>
                    <EmailInput
                        onChange={this.handleChange}
                        value={this.state.username}
                        name='email'
                        type='text'
                        autocomplete='username'
                        placeholder='Email' />
                    <SubmitBtn type='submit'>Submit</SubmitBtn>
                    {this.state.errorMessage &&
                        <LoginErrorDiv>{this.state.errorMessage}</LoginErrorDiv>
                    }
                </ForgotForm>
                <CenterDiv>
                    <Back><BackSpan onClick={() => this.props.back()}>Login</BackSpan></Back>
                </CenterDiv>
            </Container>
        )
    }
}

export default Forgot;