import React from 'react'
import styled from 'styled-components'

import ResetForm from './ResetForm'
import media from '../../../theme/Device'

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

function Instructions(props) {
    return (
        <Container>
            <Title>Please enter your email and new password below.</Title>
            <ResetForm id={props.id}/>
        </Container>
    )
}

export default Instructions;