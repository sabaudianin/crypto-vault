import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SimpleContainer from "./components/main/Container.jsx";
import SimpleBottomNavigation from "./components/footer/BottomNav.jsx";
import Wrapper from './components/wrapper/Wrapper.jsx';
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import {DataProvider} from "./components/fetch/DataFetch.jsx";
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <App/>
      </StyledEngineProvider>
  </React.StrictMode>,
)
