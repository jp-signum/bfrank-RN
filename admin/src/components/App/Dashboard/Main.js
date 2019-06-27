import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
`

function Main() {
    return(
        <Container>
            main test
        </Container>
    )
}

export default Main;