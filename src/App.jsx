import React, {useState} from 'react';
import {Outlet} from 'react-router-dom'

import Login from './components/account/Login';
import Router from './components/router/Router.jsx'
import Wrapper from "./components/layouts/Wrapper.jsx";
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import SimpleContainer from "./components/layouts/Container.jsx";
import SimpleBottomNavigation from "./components/footer/BottomNav.jsx";

const App = () => {
    // const [isLogged, setIsLogged] = useState(false);
    return (
        <Wrapper>

            <ResponsiveAppBar/>
            <SimpleContainer>
                <Router>

                </Router>
            </SimpleContainer>
            <SimpleBottomNavigation/>

        </Wrapper>

    );
};

export default App;
