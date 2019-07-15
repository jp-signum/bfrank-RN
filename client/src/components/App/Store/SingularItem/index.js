import React from 'react'
import styled from 'styled-components'

import { NavDivDark, NavDivDarkLap } from '../../../Shared/StyleConstants'
import { withContext } from '../../../AppContext'

import media from '../../../../theme/Device'
import SingluarItem from './SingularItem'
import Navigation from '../../../Shared/Navigation/Mobile/index'

const Container = styled.div`
    margin-top: 18%;

     ${media.tablet`
        margin-top: 6%;
    `}
`

function SingularItemView(props) {
    const cartCount = props.localCart.length,
        path = props.match.path,
        locationMatch = path.match(/store/g);
    
    return (
        <Container>
            <Navigation
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap}
                storeYes='storeUnderline'
                aboutNo='aboutPlain'
                accountNo='accountPlain'
                location={locationMatch[0]}
                cartCount={cartCount} />
            <SingluarItem id={props.match.params.id} />
        </Container>
    )
}

export default withContext(SingularItemView);