import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyle from '../../theme/GlobalStyle'
import Home from './Home/Current/index'
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
                    exact path="/"
                    component={Home} />
            </Switch>
            <Footer />
        </OverflowDiv>
    )
}



export default withRouter(App);