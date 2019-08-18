import React, { useEffect } from 'react'
import styled from 'styled-components'
import jwt from 'jsonwebtoken'
import moment from 'moment'

const Container = styled.div`
    background: #0D0D0D;
    height: 80vh;
`

function LogicSwitch(props) {  
    const ValidateToken = (x) => {
        const token = x.id;
        const d = moment(new Date()).unix()
        const tokenDecoded = jwt.decode(token)
        const difference = (d - tokenDecoded.exp)

        if (difference < 3600) {
            localStorage.setItem('token', token)
            x.history.push('/reset/' + tokenDecoded.data._id)
        } else {
            x.history.push('/authentication')    
        }
    }

    useEffect(() => {
        ValidateToken(props)
    })


    return (
        <Container>
       
        </Container>
    )
}

export default LogicSwitch;