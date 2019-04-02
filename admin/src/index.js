import React from 'react'
import ReactDom from 'react-dom'
import { AppContextProvider } from "./components/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";

ReactDom.render(
    <AppContextProvider>
        <Router>
            <App />
        </Router>
    </AppContextProvider>,
    document.getElementById("root")
)