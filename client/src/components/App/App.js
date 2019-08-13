import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyle from '../../theme/GlobalStyle'
import ProtectedRoute from './Authentication/ProtectedRoute'

import Home from './Home/index'
import ProductList from './Store/List/index'
import SingularItem from './Store/SingularItem/index'
import About from './About/index'
import Account from './Account/index'
import Checkout from './Checkout/index'
import Authentication from './Authentication/index'
import Terms from './Terms/index'
import Privacy from './Privacy/index'
import Footer from './Footer/index'
import Reset from './Reset/index'

const OverflowDiv = styled.div`
    overflow: hidden;
    position: relative;
`

function App() {
    return (
        <OverflowDiv>
            <GlobalStyle />
            <Switch>
                <Route
                    exact path='/'
                    component={Home} />
                <Route
                    path='/store/productlist'
                    component={ProductList} />
                <Route
                    path='/store/:id'
                    component={SingularItem} />
                <Route
                    path='/about'
                    component={About} />
                <Route
                    path='/authentication'
                    component={Authentication} />    
                <ProtectedRoute
                    path='/account/:id'
                    component={Account} />
                <ProtectedRoute
                    path='/checkout/:id'
                    component={Checkout} />
                <Route
                    path='/reset/:id'
                    component={Reset} />    
                <Route
                    path='/terms-conditions'
                    component={Terms} />
                <Route
                    path='/privacy-policy'
                    component={Privacy} />
            </Switch>
            <Footer />
        </OverflowDiv>
    )
}


export default withRouter(App);