import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';

import {LoginContext} from '../contextApi/LoginProvider.jsx'
import Home from '../../pages/Home.jsx';
import About from '../../pages/About.jsx';
import Contact from '../../pages/Contact.jsx';
import NotFound from '../main/NotFound.jsx' ;
import Trade from '../main/Trade.jsx'
import {BasicGrid} from "../main/Dashboard.jsx";
import Wallet from '../main/Wallet.jsx'
import SignUpForm from "../account/SignUp.jsx";
import LoginForm from '../account/Login.jsx'

const Router = () => {
    const {isLogged} = useContext(LoginContext)
    return (
        <Routes>
            {isLogged ? (
                <>
                    <Route path="/" element={<BasicGrid/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/trade" element={<Trade/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/signup" element={<SignUpForm/>}/>
                    <Route path="/dashboard" element={<BasicGrid/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </>
            ) : (
                <>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/signup" element={<SignUpForm/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </>
            )}
        </Routes>
    );
};

export default Router;