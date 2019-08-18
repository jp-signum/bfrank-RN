import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Meta } from '../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import ComingSoon from './ComingSoon'
import media from '../../../theme/Device'
import Navigation from '../../Shared/Navigation/index'

const Container = styled.div`
    margin-top: 20%;
     transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        margin-top: 6%;
    `}
`

function About(props) {
    const cartCount = props.localCart.length,
        path = props.location.pathname,
        locationMatch = path.match(/about/g);
    
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
                aboutYes='aboutUnderline'
                storeNo='storePlain'
                accountNo='accountPlain'
                location={locationMatch[0]}
                cartCount={cartCount}/>
            <ComingSoon />
        </Container>
    )
}

export default withContext(About);