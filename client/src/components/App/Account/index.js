import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Meta } from '../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import media from '../../../theme/Device'
import Navigation from '../../Shared/Navigation/index'

const Container = styled.div`
    transition: all ease 0.5s;
        -o-transition: all ease 0.5s;
    margin-top: 20%;

     ${media.tablet`
        margin-top: 6%;
    `}
`

function Account(props) {
    const cartCount = props.localCart.length,
        path = props.location.pathname,
        locationMatch = path.match(/account/g);
    
    return (
        <Container>
            <Helmet titleTemplate='%s | Rave Nailz'>
                <title>{Meta.title}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <Navigation
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap}
                accountYes='accountUnderline'
                storeNo='storePlain'
                aboutNo='aboutPlain'
                location={locationMatch[0]}
                cartCount={cartCount}/> 
        </Container>
    )
}

export default withContext(Account);