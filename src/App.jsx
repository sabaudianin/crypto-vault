import React from 'react';
import ReactDOM from 'react-dom/client'

import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
// import NotFound from './pages/NotFound.jsx' ;
import Router from './components/router/Router.jsx'
import Trade from './components/main/Trade.jsx'

import BasicGrid from "./components/main/Dashboard.jsx";

import Wallet from './components/main/Wallet.jsx'
import {DataProvider} from "./components/fetch/DataFetch.jsx";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import SimpleContainer from "./components/main/Container.jsx";
import SimpleBottomNavigation from "./components/footer/BottomNav.jsx";

const App = () => {
    return (

        <HashRouter>
            <DataProv
                ider>
                <Wrapper>
                    <ResponsiveAppBar/>
                    <SimpleContainer>
                        <Routes>
                            <Route path="/" element={<BasicGrid/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/trade" element={<Trade/>}/>
                            <Route path="/wallet" element={<Wallet/>}/>
                            {/*<Route path='*' element={<NotFound/>}/>*/}
                        </Routes>
                    </SimpleContainer>
                    <SimpleBottomNavigation/>
                </Wrapper>
            </DataProvider>
        </HashRouter>


    );
};

export default App;
