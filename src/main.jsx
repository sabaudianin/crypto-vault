import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from "react-router-dom";

import App from './App.jsx'
import {DataProvider} from "../database/DataFetch.jsx";
import {LoginProvider} from '../database/LoginProvider.jsx'
import {UserWalletProvider} from "../database/UserWalletProvider.jsx";

import './index.css'

import {StyledEngineProvider} from '@mui/material/styles';


ReactDOM.createRoot(document.getElementById('root')).render(
    <StyledEngineProvider injectFirst>
        <HashRouter>

            <DataProvider>
                <UserWalletProvider>
                    <LoginProvider>
                        <App/>
                    </LoginProvider>
                </UserWalletProvider>
            </DataProvider>

        </HashRouter>
    </StyledEngineProvider>
)
