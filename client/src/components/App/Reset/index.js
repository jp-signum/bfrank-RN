import React from 'react'

import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import Navigation from '../../Shared/Navigation'
import ResetForm from './ResetForm'

function Reset(props) {
    return (
        <div>
            <Navigation
                storeNo='storePlain'
                aboutNo='aboutPlain'
                accountNo='accountPlain'
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap} />
            <ResetForm id={props.match.params.id}/>
        </div>
    )
}

export default withContext(Reset);