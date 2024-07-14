import React from 'react';

import {Typography, styled} from "@mui/material";

import PropTypes from 'prop-types';

const LogoTitle = ({onClick}) => {

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        } else (console.log('OnClick w LogoTitle nie jest funkcja'))
    }

    return (
        <StyledLogoTitle
            noWrap
            onClick={handleClick}
        >
            CryptoVault
        </StyledLogoTitle>
    );
};

const StyledLogoTitle = styled(Typography)`
    font-size: 1.1rem;
    margin-right: 16px;
    font-weight: 700;
    letter-spacing: 5px;
    color: inherit;
    text-decoration: none;
    font-family: inherit;
    cursor: pointer;
    transition: .2s;

    :hover {
        color: var(--tertiary-color);
    }


`;

LogoTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LogoTitle;