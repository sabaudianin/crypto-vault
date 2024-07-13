import React from 'react';

import HamburgerBox from './HamburgerBox';
import MenuBox from './MenuBox.jsx'

import PropTypes from 'prop-types';

const HeaderNavMenu = ({navMenu, handleOpenNavMenu, handleCloseNavMenu, pages}) => {
    return (
        <>
            <HamburgerBox
                navMenu={navMenu}
                handleOpenNavMenu={handleOpenNavMenu}
                handleCloseNavMenu={handleCloseNavMenu}
                pages={pages}
            />
            <MenuBox
                pages={pages}
                handleCloseNavMenu={handleCloseNavMenu}/>
        </>
    );
};


HeaderNavMenu.propTypes = {
    navMenu: PropTypes.any,
    pages: PropTypes.any,
    handleOpenNavMenu: PropTypes.func.isRequired,
    handleCloseNavMenu: PropTypes.func.isRequired,
};
export default HeaderNavMenu;
