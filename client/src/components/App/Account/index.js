import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Meta } from '../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import media from '../../../theme/Device'
import Navigation from '../../Shared/Navigation/Mobile/index'

const Container = styled.div`
    margin-top: 20%;
     transition:all ease 0.5s;
    -o-transition: all .5s ease;

     ${media.tablet`
        margin-top: 6%;
    `}
`

function Account(props) {
    const path = props.location.pathname
    let locationMatch = path.match(/account/g);
    
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
                accountYes='accountUnderline'
                storeNo='storePlain'
                aboutNo='aboutPlain'
                location={locationMatch[0]}
                cartCount=''/>
          
        </Container>
    )
}

export default withContext(Account);