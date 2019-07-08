import React from 'react'
import Helmet from 'react-helmet'

import { Meta } from '../../../Shared/Meta'
import { NavDivDark, NavDivDarkLap } from '../../../Shared/StyleConstants'

import ProductList from './ProductList'
import Navigation from '../../../Shared/Navigation/Mobile/index'

function Store() {
    return (
        <div>
            <Helmet titleTemplate="%s | Rave Nailz">
                <title>{Meta.title}</title>
                <meta name='description' content={Meta.description}></meta>
                <meta name='keywords' content={Meta.keywords}></meta>
            </Helmet>
            <Navigation
                color='#fdfdfd'
                navStyle={NavDivDark}
                navStyleLap={NavDivDarkLap}
                breakpoints=''
                cartCount=''/>
            <ProductList />
        </div>
    )
}

export default Store;