import React from 'react'
import Helmet from 'react-helmet'

import { Meta } from '../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import Navigation from '../../Shared/Navigation/index'
import Auth from './Auth'

function AuthenticationComponent(props) {
    return (
        <div>
            <Helmet titleTemplate='%s | Rave Nailz'>
                <title>{Meta.terms}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <Navigation
                storeNo='storePlain'
                aboutNo='aboutPlain'
                accountNo='accountPlain'
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap} />
            <Auth history={props.history}/>
        </div>
    )
}

export default withContext(AuthenticationComponent);