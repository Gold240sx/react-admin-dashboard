import React from "react";
import ReactDOM from "react-dom";

import './CSS/index.css'
import App from './App.js';
import { ContextProvider } from './Context/ContextProvider'

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);