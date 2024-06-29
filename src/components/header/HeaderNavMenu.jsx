import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import styles from './HeaderNavMenu.module.css'


const pages = [
    {name: 'Home', path: '/home'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'},
];


const HeaderNavMenu = ({navMenu, handleOpenNavMenu, handleCloseNavMenu}) => {
    return (
        <>
            <Box className={styles.header__menu}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={navMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(navMenu)}
                    onClose={handleCloseNavMenu}
                    className={styles.header__menu}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"> <Link to={page.path} style={{
                                textDecoration: 'none',
                                color: 'inherit'
                            }}>{page.name}</Link></Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Typography
                variant="h5"
                noWrap
                className={`${styles.header__menu} ${styles.header__logo}` }

            >
                CryptoVault
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'white', display: 'block'}}
                        component={Link}
                        to={page.path}
                    >
                        {page.name}
                    </Button>
                ))}
            </Box>
        </>
    );
};

export default HeaderNavMenu;
