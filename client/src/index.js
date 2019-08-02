import React from 'react'
import ReactDom from 'react-dom'
import { AppContextProvider } from '../src/components/AppContext'
import { BrowserRouter as Router } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import App from './components/App/App'
import GA from './utils/GoogleAnalytics'

ReactDom.render(
    <AppContextProvider>
        <Router>
            { GA.init() && <GA.RouteTracker /> }
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </AppContextProvider>,
    document.getElementById('root')
)