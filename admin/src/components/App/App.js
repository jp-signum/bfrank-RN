import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import GlobStyle from '../../theme/GlobalStyle'
import Login from './Authentication/Login'
import Home from './Home/index'
import ProtectedRoute from './Authentication/ProtectedRoute'

const LandingDiv = styled.div`
    width: 100%;
    background-color: #F4FAFF ;
    color: #151517;
    position: relative;
`

function App() {
    return (
        <LandingDiv>
            <GlobStyle />
            <Switch>
                <Route
                    path="/login"
                    component={Login} />
                <ProtectedRoute
                    path="/home"
                    component={Home} />
                <Route
                    exact path="/"
                    render={() => <Redirect to="/home" />} />
            </Switch>
        </LandingDiv>
    )
}

export default App;