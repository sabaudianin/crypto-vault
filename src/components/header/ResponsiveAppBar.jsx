import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import HeaderNavMenu from "./HeaderNavMenu";
import Logout from "./Logout.jsx";
import LogoTitle from './LogoTitle';

import {AppBar, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";

function ResponsiveAppBar() {
    const [navMenu, setNavMenu] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (e) => {
        setNavMenu(e.currentTarget);
        console.log(e.currentTarget)
    };

    const handleCloseNavMenu = () => {
        setNavMenu(null);
    };

    const handleNavigate = () => {
        navigate('/')
    }

    const pages = [
        {name: 'Home', path: '/home'},
        {name: 'About', path: '/about'},
        {name: 'Contact', path: '/contact'},
    ];

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <LogoTitle onClick={handleNavigate}/>
                <HeaderNavMenu
                    navMenu={navMenu}
                    handleOpenNavMenu={handleOpenNavMenu}
                    handleCloseNavMenu={handleCloseNavMenu}
                    handleNavigate={handleNavigate}
                    pages={pages}
                />
                <Logout
                />
            </Toolbar>
        </StyledAppBar>

    );
}

const StyledAppBar = styled(AppBar)({
    background: 'var(--appbar-color)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
});

export default ResponsiveAppBar;
