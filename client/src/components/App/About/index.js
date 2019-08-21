import React from 'react'
import Helmet from 'react-helmet'

import { Meta } from '../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../Shared/StyleConstants'
import { withContext } from '../../AppContext'

import Instruct from './Instruct'
import Navigation from '../../Shared/Navigation/index'


function About(props) {
    const cartCount = props.localCart.length,
        path = props.location.pathname,
        locationMatch = path.match(/about/g);
    
    return (
        <div>
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
            <Instruct />
        </div>
    )
}

export default withContext(About);