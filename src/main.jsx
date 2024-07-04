import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from "react-router-dom";

import App from './App.jsx'
import {DataProvider} from "../database/DataFetch.jsx";
import {LoginProvider} from '../database/LoginProvider.jsx'

import {StyledEngineProvider} from '@mui/material/styles';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <HashRouter>
             <LoginProvider>
                <DataProvider>
                    <App/>
                </DataProvider>
             </LoginProvider>
            </HashRouter>
        </StyledEngineProvider>
    </React.StrictMode>,
)
