import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import GlobalStyle from '../../theme/GlobalStyle'
import Home from './Home/Current/index'
import Footer from './Footer/index'

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