import React from 'react';
import {Link} from "react-router-dom";

import {Box, Button, styled} from '@mui/material';

import PropTypes from 'prop-types';

const MenuBox = ({pages, handleCloseNavMenu}) => {

    const handleMenuClose = () => {
        if (typeof handleCloseNavMenu === 'function') {
            handleCloseNavMenu();
        } else (console.log('handleCloseNavMenu w MenuBox nie jest funkcja'))
    }

    return (
        <Box sx={BoxSx}>
            {pages.map((page) => (
                <StyledButton
                    key={page.name}
                    onClick={handleMenuClose}
                    component={Link}
                    to={page.path}
                >
                    {page.name}
                </StyledButton>
            ))}
        </Box>
    );
};

const StyledButton = styled(Button)({
    marginTop: '8px',
    marginBottom: '8px',
    color: 'white',
    display: 'block',
    fontFamily: 'inherit',
    transition: '.2s',
    '&:hover': {
        color: 'var(--tertiary-color)'
    }
})

const BoxSx = {
    flexGrow: 1,
    display: {xs: 'none', md: 'flex'},
}

MenuBox.propTypes = {
    pages: PropTypes.any,
    handleCloseNavMenu: PropTypes.func.isRequired,
};

export default MenuBox;