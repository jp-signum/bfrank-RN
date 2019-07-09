import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Meta } from '../../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../../Shared/StyleConstants'

import ProductList from './ProductList'
import Navigation from '../../../Shared/Navigation/Mobile/index'

const Container = styled.div`
    margin-top: 20%;
`

function Store() {
    return (
        <Container>
            <Helmet titleTemplate="%s | Rave Nailz">
                <title>{Meta.title}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <Navigation
                color='#fdfdfd'
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap}
                breakpoints=''
                cartCount=''/>
            <ProductList />
        </Container>
    )
}

export default Store;