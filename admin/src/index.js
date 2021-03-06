import React from 'react'
import ReactDom from 'react-dom'
import { AppContextProvider } from './AppContext'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";

ReactDom.render(
    <AppContextProvider>
        <Router basename='/admin'>
            <App />
        </Router>
    </AppContextProvider>,
    document.getElementById("root")
)