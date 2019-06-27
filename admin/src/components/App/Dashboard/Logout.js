import React from 'react'
import styled from 'styled-components'

import { withContext } from '../../../AppContext'

const Container = styled.div`
    position: relative;
    top: 24px;
    left: 20px;
    z-index: 4;
`

const LogoutDiv = styled.div`

`

const LogoutSpan = styled.span`
    cursor: pointer;
    color: #F2F2F2;
    border: #F2F2F2 2px solid;
    border-radius: 4px;
    padding: 4px;

    :hover {
        border: white 2px solid;
        color: #F2F2F2;
    }

`

function Logout(props) {
    return (
        <Container>
            <LogoutDiv><LogoutSpan onClick={() => props.logout()}>Logout</LogoutSpan></LogoutDiv>
        </Container>
    )
}

export default withContext(Logout);