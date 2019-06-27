import React from 'react'
import styled from 'styled-components'

import Menu from './Menu'

const Container = styled.div`
    overflow: hidden;
    width: 100%; 
    height: 100%;
`

function Dashboard() {
    return (
        <Container>
            <Menu />
        </Container>
    )
}

export default Dashboard;