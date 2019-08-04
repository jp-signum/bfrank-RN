import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Meta } from '../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import media from '../../../theme/Device'
import Navigation from '../../Shared/Navigation/Mobile/index'
import Policy from './Policy'

const Container = styled.div`
    margin-top: 20%;
     transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        margin-top: 6%;
    `}
`

function Privacy() {
    return (
        <Container>
            <Helmet titleTemplate="%s | Rave Nailz">
                <title>{Meta.privacy}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <Navigation
                storeNo='storePlain'
                aboutNo='aboutPlain'
                accountNo='accountPlain'
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap} />
            <Policy />
        </Container>
    )
}

export default withContext(Privacy);