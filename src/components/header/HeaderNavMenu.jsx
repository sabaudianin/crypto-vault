import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


import {styled} from '@mui/material/styles';
import {Box, IconButton, MenuItem, Typography, Button, Menu} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import PropTypes from 'prop-types';


const pages = [
    {name: 'Home', path: '/home'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'},
];


const HeaderNavMenu = ({navMenu, handleOpenNavMenu, handleCloseNavMenu, handleNavigate}) => {
    const navigate = useNavigate();
    return (
        <>
            <StyledBox>
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
                <StyledMenu
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

                >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"> <Link to={page.path} style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                fontFamily: 'inherit',

                            }}>{page.name}</Link></Typography>
                        </MenuItem>
                    ))}
                </StyledMenu>
            </StyledBox>
            <StyledTypography
                variant="h5"
                noWrap
                onClick={handleNavigate}
            >
                CryptoVault
            </StyledTypography>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'white', display: 'block', fontFamily: 'inherit'}}
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


const StyledBox = styled(Box)`
    flex-grow: 1;
    display: flex;

    @media (min-width: 960px) {
        display: none;
    }
`;


const StyledTypography = styled(Typography)`
    margin-right: 16px;
    flex-grow: 1;
    font-family: inherit;
    font-weight: 700;
    letter-spacing: .3rem;
    color: inherit;
    text-decoration: none;
    display: flex;
    cursor: pointer;

    @media (min-width: 960px) {
        display: none;
    }
`;
const StyledMenu = styled(Menu)`
    flex-grow: 1;
    display: flex;

    @media (min-width: 960px) {
        display: none;
    }
`;
HeaderNavMenu.propTypes = {
    navMenu: PropTypes.any,
    handleOpenNavMenu: PropTypes.func.isRequired,
    handleCloseNavMenu: PropTypes.func.isRequired,
};
export default HeaderNavMenu;
