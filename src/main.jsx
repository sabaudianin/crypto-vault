import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from "react-router-dom";

import App from './App.jsx'
import {DataProvider} from "../database/DataFetch.jsx";
import {LoginProvider} from '../database/LoginProvider.jsx'

import {StyledEngineProvider} from '@mui/material/styles';

import './index.css'
import {WalletProvider} from "../database/WalletProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <StyledEngineProvider injectFirst>
        <HashRouter>
            <LoginProvider>
                <DataProvider>
                    <WalletProvider>
                        <App/>
                    </WalletProvider>
                </DataProvider>
            </LoginProvider>
        </HashRouter>
    </StyledEngineProvider>
)
