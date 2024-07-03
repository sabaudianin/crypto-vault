import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from '../../pages/Home.jsx';
import About from '../../pages/About.jsx';
import Contact from '../../pages/Contact.jsx';

import NotFound from '../main/NotFound.jsx' ;
import Trade from '../main/Trade.jsx'
import BasicGrid from "../main/Dashboard.jsx";
import Wallet from '../main/Wallet.jsx'
import SignUpForm from "../signUp/SignUp.jsx";
import LoginForm from '../signUp/Login.jsx'

const Router = () => {
    return (
        <main>

                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<LoginForm/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/trade" element={<Trade/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/signup" element={<SignUpForm/>}/>
                    <Route path="/dashboard" element={<BasicGrid/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>



        </main>


    );
};

export default Router;