import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import HeaderNavMenu from "./HeaderNavMenu";
import HeaderUserMenu from "./HeaderUserMenu";

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import {Toolbar} from "@mui/material";


function ResponsiveAppBar() {
    const [navMenu, setNavMenu] = useState(null);
    const [userMenu, setUserMenu] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setNavMenu(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setUserMenu(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setNavMenu(null);
    };

    const handleCloseUserMenu = () => {
        setUserMenu(null);
    };

    const handleNavigate = () => {
        navigate('/')
    }
    return (

        <StyledAppBar position="static">
            <Toolbar>
                <StyledTypography
                    variant="h6"
                    noWrap
                    onClick={handleNavigate}
                >
                    CryptoVault
                </StyledTypography>

                <HeaderNavMenu
                    navMenu={navMenu}
                    handleOpenNavMenu={handleOpenNavMenu}
                    handleCloseNavMenu={handleCloseNavMenu}
                    handleNavigate={handleNavigate}
                />

                <HeaderUserMenu
                    userMenu={userMenu}
                    handleOpenUserMenu={handleOpenUserMenu}
                    handleCloseUserMenu={handleCloseUserMenu}
                />
            </Toolbar>
        </StyledAppBar>

    );
}

const StyledAppBar = styled(AppBar)({
    background: 'var(--appbar-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const StyledTypography = styled(Typography)`
    margin-right: 16px;
    display: none;
    position: static;
    font-weight: 700;
    letter-spacing: .4rem;
    color: inherit;
    text-decoration: none;
    font-family: inherit;
    cursor: pointer;

    @media (min-width: 960px) {
        display: flex;
    }
`;


export default ResponsiveAppBar;
