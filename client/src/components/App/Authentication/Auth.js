import React, { Component } from 'react'
import styled from 'styled-components'

import Login from './Login'
import Signup from './Signup'
import ForgotForm from './ForgotForm'
import media from '../../../theme/Device'

const Container = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    display: flex;
    color: #fdfdfd;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #0D0D0D;
    height: 76vh;

    ${media.phoneM`
        height: 78vh;
    `}

    ${media.tablet`
        height: 84vh;
    `}

    ${media.laptop`
        height: 79vh;
    `}
`

const AuthToggle = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    font-size: 1.6em;
    letter-spacing: 0.1em;
    padding: 50px 0px 20px 0px;

     ${media.phoneM`
        font-size: 2em;
    `}

    ${media.laptop`
        margin-top: 40px;
    `}
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
                    ? <ForgotForm back={this.handleLoginSwitch} />
                    : <div>
                        {this.state.login
                            ? <Login history={this.props.history} switch={this.handleForgotSwitch} />
                            : <Signup history={this.props.history} />
                        }
                    </div>
                }
            </Container>
        )
    }
}

export default Auth;