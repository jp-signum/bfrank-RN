import React, { Component } from 'react'
import styled from 'styled-components'

import media from '../../../theme/Device'
import Login from './Login'
import Signup from './Signup'
import ForgotForm from './ForgotForm'

const Container = styled.div`
    background: #0D0D0D;
    height: 76vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fdfdfd;
`

const AuthToggle = styled.div`
    padding: 50px 0px 20px 0px;
    font-size: 1.6em;
    letter-spacing: 0.1em;
`

const LoginSpan = styled.span`
    cursor: pointer;
`

const SignupSpan = styled.span`
    cursor: pointer;
`

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: true,
            forgot: false
        }
    }

    handleLoginSwitch = () => {
        this.setState({
            login: true,
            forgot: false
        })
    }

    handleSignupSwitch = () => {
        this.setState({
            login: false
        })
    }

    handleForgotSwitch = () => {
        this.setState({
            forgot: true
        })
    }

    render() {
        return (
            <Container>
                <AuthToggle>
                    <LoginSpan
                        className={this.state.login ? 'loginHighlight' : 'loginNotHL'}
                        onClick={this.handleLoginSwitch}>Login</LoginSpan>
                    <span>  / </span>
                    <SignupSpan
                        className={this.state.login ? 'loginNotHL' : 'loginHighlight'}
                        onClick={this.handleSignupSwitch}>Signup</SignupSpan>
                </AuthToggle>
                {this.state.forgot
                    ? <ForgotForm back={this.handleLoginSwitch}/>
                    : <div>
                            {this.state.login
                                ? <Login
                                    history={this.props.history} 
                                    switch={this.handleForgotSwitch}/>
                                : <Signup />
                            }
                        </div>
                }
            </Container>
        )
    }
}

export default Auth;