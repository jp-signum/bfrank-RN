import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import GlobalStyle from '../../theme/GlobalStyle'
import Home from './Home/index'
import Footer from './Footer'


function App() {
    return (
        <div>
            <GlobalStyle />
            <Switch>
                <Route
                    exact path="/"
                    component={Home} />
            </Switch>
            <Footer />
        </div>
    )
}



export default withRouter(App);