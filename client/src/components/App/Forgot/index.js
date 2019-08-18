import React from 'react'

import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import Navigation from '../../Shared/Navigation'
import LogicSwitch from './LogicSwitch'

function Forgot(props) {
    return (
        <div>
            <Navigation
                storeNo='storePlain'
                aboutNo='aboutPlain'
                accountNo='accountPlain'
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap} />
            <LogicSwitch 
                history={props.history}
                id={props.match.params.id} />
        </div>
    )
}

export default withContext(Forgot);
