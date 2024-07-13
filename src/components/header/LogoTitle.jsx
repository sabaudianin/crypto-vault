import React from 'react';

import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

import PropTypes from 'prop-types';

const LogoTitle = ({onClick}) => {

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        } else (console.log('OnClick w LogoTitle nie jest funkcja'))
    }

    return (
        <StyledLogoTitle
            variant="h6"
            noWrap
            onClick={handleClick}
        >
            CryptoVault
        </StyledLogoTitle>
    );
};

const StyledLogoTitle = styled(Typography)`
    margin-right: 16px;
    font-weight: 700;
    letter-spacing: .4rem;
    color: inherit;
    text-decoration: none;
    font-family: inherit;
    cursor: pointer;
`;

LogoTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LogoTitle;