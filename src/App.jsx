import React from 'react';

import Router from './components/router/Router.jsx'
import Wrapper from "./components/layouts/Wrapper.jsx";
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import SimpleContainer from "./components/layouts/Container.jsx";
import SimpleBottomNavigation from "./components/footer/BottomNav.jsx";

const App = () => {

    return (
        <Wrapper>
            <ResponsiveAppBar/>
            <SimpleContainer>
                <Router/>
            </SimpleContainer>
            <SimpleBottomNavigation/>
        </Wrapper>
    );
};

export default App;
