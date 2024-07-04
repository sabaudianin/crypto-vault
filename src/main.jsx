import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {DataProvider} from "../database/DataFetch.jsx";
import {StyledEngineProvider} from '@mui/material/styles';
import './index.css'
import {HashRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <HashRouter>
                <DataProvider>
                    <App/>
                </DataProvider>
            </HashRouter>
        </StyledEngineProvider>
    </React.StrictMode>,
)
