import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Meta } from '../../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../../Shared/StyleConstants'
import { withContext } from '../../../AppContext'

import media from '../../../../theme/Device'
import ProductList from './ProductList'
import Navigation from '../../../Shared/Navigation/Mobile/index'

const Container = styled.div`
    margin-top: 20%;
     transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        margin-top: 6%;
    `}
`

function Store(props) {
    const path = props.location.pathname
    let locationMatch = path.match(/store/g);

    return (
        <Container>
            <Helmet titleTemplate="%s | Rave Nailz">
                <title>{Meta.title}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <Navigation
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap}
                storeYes='storeUnderline'
                aboutNo='aboutPlain'
                accountNo='accountPlain'
                location={locationMatch[0]}
                cartCount=''/>
            <ProductList />
        </Container>
    )
}

export default withContext(Store);