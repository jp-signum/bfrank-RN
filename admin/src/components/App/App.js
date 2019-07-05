import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import GlobStyle from '../../theme/GlobalStyle'
import Login from './Authentication/Login'
import Dashboard from './Dashboard/index'
import ProtectedRoute from './Authentication/ProtectedRoute'


function App() {
    return (
        <div>
            <GlobStyle />
            <Switch>
                <Route
                    path='/login'
                    component={Login} />
                <ProtectedRoute
                    path='/dashboard'
                    component={Dashboard} />
                <Route
                    exact path='/'
                    render={() => <Redirect to='/dashboard' />} />
            </Switch>
        </div>
    )
}

export default App;