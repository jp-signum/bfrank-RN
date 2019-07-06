import React from 'react'
import Helmet from 'react-helmet'

import { Meta } from '../../../Shared/Meta'
import { NavDivLight, NavDivLightLap } from '../../../Shared/StyleConstants'

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
                color='#0D0D0D'
                navStyle={NavDivLight}
                navStyleLap={NavDivLightLap}
                breakpoints=''
                cartCount=''
                burgerBarClassName='bm-burger-bars-DARK' />
            <ProductList />
        </div>
    )
}

export default Store;