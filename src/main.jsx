import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from "react-router-dom";

import App from './App.jsx'
import {DataProvider} from "./components/contextApi/DataProvider.jsx";
import {LoginProvider} from './components/contextApi/LoginProvider.jsx'
import {UserWalletProvider} from "./components/contextApi/UserWalletProvider.jsx";

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
