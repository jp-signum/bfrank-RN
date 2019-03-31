import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from '../src/components/ScrollToTop'
import App from './components/App/App'

ReactDom.render(
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
)