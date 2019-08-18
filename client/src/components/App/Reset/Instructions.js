import React, { Component } from 'react'
import styled from 'styled-components'

import ResetForm from './ResetForm'

const Container = styled.div`
    background: #0D0D0D;
    height: 76vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fdfdfd;
`

const Title = styled.div`
    padding: 0px 0px 20px 14px;
    text-align: center;
    font-size: 1.2em;
`

class Instructions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: 'Please enter your email and new password below.'
            }
        }
    
    resetText = () => {
        this.setState({
            titleText: ''
        })
    }

    render() {
        return (
            <Container>
                <Title>{this.state.titleText}</Title>
                <ResetForm 
                    resetText={this.resetText}
                    id={this.props.id} />
            </Container>
        )
    }
}

export default Instructions;