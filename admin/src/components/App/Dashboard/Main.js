import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    grid-template-rows: 8.2vh 8.2vh 8.2vh 8.2vh 8.2vh 8.2vh 8.2vh 8.2vh;
`

const ProductsDiv = styled.div`
    grid-column: 1/3;
    grid-row: 1/3;
    background: #0D0D0D;
    border: 2px solid #0D0D0D;
    border-radius: 4px;
`

const ProductsTitle = styled.div`
    color: white;
`

function Main() {
    return(
        <Container>
            <ProductsDiv>
                <ProductsTitle>Products</ProductsTitle>
            </ProductsDiv>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    )
}

export default Main;