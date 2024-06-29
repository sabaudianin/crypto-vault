import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home.jsx';
import About from '../../pages/About.jsx';
import Contact from '../../pages/Contact.jsx';
// import NotFound from './pages/NotFound.jsx' ;

import Trade from '../main/Trade.jsx'

import BasicGrid from "../main/Dashboard.jsx";

import Wallet from '../main/Wallet.jsx'
import {DataProvider} from "../fetch/DataFetch.jsx";


const Router = () => {
    return (
        <HashRouter>

            <Routes>
                <Route path="/" element={<BasicGrid/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/trade" element={<Trade/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
                {/*<Route path='*' element={<NotFound/>}/>*/}
            </Routes>

        </HashRouter>
    );
};

export default Router;