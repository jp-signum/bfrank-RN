import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyle from '../../theme/GlobalStyle'
import Home from './Home/index'
import ProductList from './Store/List/index'
import SingularItem from './Store/SingularItem/index'
import Cart from './Cart/index'
import Footer from './Footer/index'

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
                    path='/cart/:id'
                    component={Cart} />
            </Switch>
            <Footer />
        </OverflowDiv>
    )
}


export default withRouter(App);