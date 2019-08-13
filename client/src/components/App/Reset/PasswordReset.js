import React, { useEffect } from 'react'
import styled from 'styled-components'
import jwt from 'jsonwebtoken';

import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import PasswordReset from './ResetForm'
import media from '../../../theme/Device'
import Navigation from '../../Shared/Navigation/index'

const Container = styled.div`

`

function Reset(props) {
    console.log(props.id)
    console.log(localStorage)
    
    const ValidateToken = (x) => {
        const token = x;

        // var decoded = jwt.verify(token, 'shhhhh', );
        

        // localStorage.setItem('token', token)
    }

    useEffect(() => {
        ValidateToken(props.id)
    })

    return (
        <Container>
            
        </Container>
    )
}

export default withContext(Reset);
