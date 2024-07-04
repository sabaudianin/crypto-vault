import React,{useContext} from 'react';
import {LoginContext} from '../database/LoginProvider.jsx'
import Router from './components/router/Router.jsx'
import Wrapper from "./components/layouts/Wrapper.jsx";
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import SimpleContainer from "./components/layouts/Container.jsx";
import SimpleBottomNavigation from "./components/footer/BottomNav.jsx";

const App = () => {
  const{isLogged} = useContext(LoginContext)
    return (
        <Wrapper>
                <ResponsiveAppBar/>
                <SimpleContainer>
                    <Router isLogged={isLogged}/>
                </SimpleContainer>
                <SimpleBottomNavigation/>
        </Wrapper>

    );
};

export default App;
