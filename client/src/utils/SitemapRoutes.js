import React from 'react'
import { Route } from 'react-router-dom'


export default (
    <Route>
        <Route exact path='/' />
        <Route path='/store/productlist' />
        <Route path='/store/:id' />
        <Route path='/about' />
        <Route path='/terms-conditions' />
        <Route path='/privacy-policy' />
    </Route>
)





