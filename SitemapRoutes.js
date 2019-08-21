import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/index'
import ProductList from './Store/List/index'
import SingularItem from './Store/SingularItem/index'
import About from './About/index'
import Terms from './Terms/index'
import Privacy from './Privacy/index'


export default (
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
            path='/terms-conditions'
            component={Terms} />
        <Route
            path='/privacy-policy'
            component={Privacy} />
    </Switch>
)


