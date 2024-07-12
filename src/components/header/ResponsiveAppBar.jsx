import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import HeaderNavMenu from "./HeaderNavMenu";
import Logout from "./Logout.jsx";

import {styled} from '@mui/material/styles';
import {Toolbar,AppBar,Typography } from "@mui/material";


function ResponsiveAppBar() {
    const [navMenu, setNavMenu] = useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setNavMenu(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setNavMenu(null);
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
                <Logout
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
