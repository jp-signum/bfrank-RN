import React, { useEffect } from 'react'
import styled from 'styled-components'

import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import PasswordReset from './PasswordReset'
import media from '../../../theme/Device'
import Navigation from '../../Shared/Navigation/index'

const Container = styled.div`

`

function Reset(props) {
    return (
        <Container>
            <Navigation
                storeNo='storePlain'
                aboutNo='aboutPlain'
                accountNo='accountPlain'
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap} />
            <PasswordReset id={props.match.params.id}/>
        </Container>
    )
}

export default withContext(Reset);