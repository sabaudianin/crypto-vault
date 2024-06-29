import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderUserMenu from "./HeaderUserMenu";
import styles from './ResponsiveAppBar.module.css'
import {Toolbar} from "@mui/material";


function ResponsiveAppBar() {
    const [navMenu, setNavMenu] = useState(null);
    const [userMenu, setUserMenu] = useState(null);

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

    return (
        <AppBar position="static" className={styles.header__appBar} >
            <Toolbar>

                <Typography
                    variant="h6"
                    noWrap
                    className={styles.header__logo}
                >
                    CryptoVault
                </Typography>

                <HeaderNavMenu
                    navMenu={navMenu}
                    handleOpenNavMenu={handleOpenNavMenu}
                    handleCloseNavMenu={handleCloseNavMenu}
                />

                <HeaderUserMenu
                    userMenu={userMenu}
                    handleOpenUserMenu={handleOpenUserMenu}
                    handleCloseUserMenu={handleCloseUserMenu}
                />
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;
