import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import { PropTypes } from 'prop-types';

import ScrollToTop from './components/ScrollToTop'
import App from './components/App/App'

const GA_KEY = 'UA-122359368-3';

ReactGA.initialize(GA_KEY);

class GAListener extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.sendPageView(this.context.router.history.location);
        this.context.router.history.listen(this.sendPageView);
    }

    sendPageView(location) {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    }

    render() {
        return this.props.children;
    }
}

ReactDom.render(
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
)