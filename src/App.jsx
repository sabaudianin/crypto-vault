import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import Wrapper from './components/wrapper/Wrapper.jsx';

const App = () => {
    return (

        <HashRouter>
            <Wrapper>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Wrapper>
        </HashRouter>

    );
};

export default App;
