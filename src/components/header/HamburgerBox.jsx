import React from 'react';
import {Link} from 'react-router-dom';

import {Box, IconButton, MenuItem, Typography, Menu, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import PropTypes from 'prop-types';


const HamburgerBox = ({navMenu, handleOpenNavMenu, handleCloseNavMenu, pages}) => {


    const handleMenuOpen = (e) => {
        if (typeof handleOpenNavMenu === 'function') {
            handleOpenNavMenu(e);
        } else (console.log('handleOpenNavMenu w HamburgerBox nie jest funkcja'))
    }

    const handleMenuClose = () => {
        if (typeof handleCloseNavMenu === 'function') {
            handleCloseNavMenu();
        } else (console.log('handleCloseNavMenu w HamburgerBox nie jest funkcja'))
    }


    return (
        <StyledBox>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
            >
                <MenuIcon sx={{}}/>
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
                onClose={handleMenuClose}

            >
                {pages.map((page) => (
                    <MenuItem key={page.name}
                              onClick={handleMenuClose}
                              sx={MenuItemStyle}>
                        <Typography sx={TopographyStyle}>
                            <Link to={page.path} style={LinkStyle}>
                                {page.name}
                            </Link>
                        </Typography>
                    </MenuItem>
                ))}
            </StyledMenu>
        </StyledBox>

    );
};


const StyledBox = styled(Box)`
    flex-grow: 1;
    display: flex;
    transition: .2s;

    :hover {
        color: var(--tertiary-color);
    }

    @media (min-width: 900px) {
        display: none;
      
    }
`;
const StyledMenu = styled(Menu)`
    flex-grow: 1;
    display: flex;


    @media (min-width: 900px) {
        display: none;
    }
`;
const MenuItemStyle = {
    background: 'var(--appbar-color)',
    fontFamily: 'inherit',
    '&:hover': {
        backgroundColor: 'var(--tertiary-color)'
    },
}

const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    fontFamily: 'inherit',
}
const TopographyStyle = {
    fontFamily: 'inherit'
}


HamburgerBox.propTypes = {
    navMenu: PropTypes.any,
    pages: PropTypes.any,
    handleOpenNavMenu: PropTypes.func.isRequired,
    handleCloseNavMenu: PropTypes.func.isRequired,
};
export default HamburgerBox;